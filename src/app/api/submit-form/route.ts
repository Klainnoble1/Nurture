import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');
const DEFAULT_TO_EMAIL = 'admin@nurturenestmultilingualnursery.com';
const DEFAULT_FROM_EMAIL = 'Nurture Nest Website <onboarding@resend.dev>';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { formType, ...fields } = data;
    
    // In local development or if Supabase isn't fully linked with service role, 
    // it's safer to use the standard client for public inserts mapped by RLS 
    // or log and bypass if not configured. Using supabaseAdmin here as instructed.
    const supabase = supabaseAdmin();
    
    // Destination mailbox for all form notifications.
    const toEmail = process.env.CONTACT_FORM_EMAIL || DEFAULT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;
    let dbSaved = false;
    
    let subject = 'New Form Submission';
    let htmlContent = '';

    const saveFallbackSubmission = async (message: string) => {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: fields.name || fields.parent_name || 'Unknown',
          email: fields.email || 'unknown@example.com',
          phone: fields.contact_number || fields.mobile || null,
          message,
          status: 'new',
        }]);

      if (error) throw error;
      dbSaved = true;
    };
    
    // Handle different form types mapped directly to SQL tables created previously
    if (formType === 'enquiry') {
      // 1. Database Insert
      const { error: dbError } = await supabase
        .from('enquiries')
        .insert([{
          name: fields.name,
          email: fields.email,
          contact_number: fields.contact_number,
          enquiry_text: fields.enquiry_text,
        }]);
        
      if (dbError) {
        if (dbError.code === 'PGRST205') {
          await saveFallbackSubmission(`Enquiry: ${fields.enquiry_text ?? ''}`);
        } else {
          throw dbError;
        }
      } else {
        dbSaved = true;
      }

      // 2. Email prep
      subject = `New Enquiry from ${fields.name}`;
      htmlContent = `
        <h2>New General Enquiry</h2>
        <p><strong>Name:</strong> ${fields.name}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Contact Number:</strong> ${fields.contact_number}</p>
        <p><strong>Enquiry:</strong><br/>${fields.enquiry_text}</p>
      `;
      
    } else if (formType === 'tour') {
      const { error: dbError } = await supabase
        .from('tours')
        .insert([{
          name: fields.name,
          email: fields.email,
          contact_number: fields.contact_number,
          preferred_type: fields.preferred_type,
          marketing_opt_in: fields.marketing_opt_in,
        }]);
        
      if (dbError) {
        if (dbError.code === 'PGRST205') {
          await saveFallbackSubmission(
            `Tour request. Preferred type: ${fields.preferred_type ?? 'N/A'}. Marketing opt-in: ${fields.marketing_opt_in ? 'Yes' : 'No'}.`
          );
        } else {
          throw dbError;
        }
      } else {
        dbSaved = true;
      }
      
      subject = `Nursery Tour Request: ${fields.name}`;
      htmlContent = `
        <h2>New Nursery Tour Request</h2>
        <p><strong>Name:</strong> ${fields.name}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Contact Number:</strong> ${fields.contact_number}</p>
        <p><strong>Preferred Type:</strong> ${fields.preferred_type}</p>
        <p><strong>Marketing Opt-in:</strong> ${fields.marketing_opt_in ? 'Yes' : 'No'}</p>
      `;
      
    } else if (formType === 'join') {
      const { error: dbError } = await supabase
        .from('applications')
        .insert([{
          parent_name: fields.parent_name,
          parent_dob: fields.parent_dob,
          mobile: fields.mobile,
          email: fields.email,
          child_name: fields.child_name,
          child_dob: fields.child_dob,
          child_age: fields.child_age,
          start_date: fields.start_date,
          has_multiple_children: fields.has_multiple_children,
          additional_children: fields.additional_children,
        }]);
        
      if (dbError) {
        if (dbError.code === 'PGRST205') {
          await saveFallbackSubmission(
            `Join application for child ${fields.child_name ?? 'N/A'} starting ${fields.start_date ?? 'N/A'}.`
          );
        } else {
          throw dbError;
        }
      } else {
        dbSaved = true;
      }
      
      subject = `New Nursery Registration Application: ${fields.parent_name}`;
      htmlContent = `
        <h2>New Nursery Registration Application</h2>
        <h3>Parent Details</h3>
        <p><strong>Name:</strong> ${fields.parent_name}</p>
        <p><strong>DOB:</strong> ${fields.parent_dob}</p>
        <p><strong>Mobile:</strong> ${fields.mobile}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        
        <h3>Child 1 Details</h3>
        <p><strong>Name:</strong> ${fields.child_name}</p>
        <p><strong>DOB:</strong> ${fields.child_dob}</p>
        <p><strong>Age:</strong> ${fields.child_age}</p>
        <p><strong>Desired Start Date:</strong> ${fields.start_date}</p>
      `;

      if (fields.has_multiple_children && fields.additional_children?.length > 0) {
        const child2 = fields.additional_children[0];
        htmlContent += `
          <h3>Child 2 Details</h3>
          <p><strong>Name:</strong> ${child2.child_name}</p>
          <p><strong>DOB:</strong> ${child2.child_dob}</p>
          <p><strong>Age:</strong> ${child2.child_age}</p>
          <p><strong>Desired Start Date:</strong> ${child2.start_date}</p>
        `;
      }
    } else {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    // 3. Send Email using Resend.
    // Never fail the whole submission if email delivery fails after DB insert.
    let emailSent = false;
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          subject: subject,
          html: htmlContent,
        });
        emailSent = true;
      } catch (emailError) {
        console.error('Resend email delivery failed:', emailError);
      }
    } else {
      console.warn('RESEND_API_KEY is not set. Email was not sent, but database insertion succeeded.');
    }

    return NextResponse.json({ success: true, emailSent, dbSaved });
    
  } catch (error: any) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: error?.message || 'An error occurred during submission' },
      { status: 500 }
    );
  }
}
