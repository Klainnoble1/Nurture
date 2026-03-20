import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { hasSupabaseServiceRole, supabaseAdmin } from '@/lib/supabase';
import { Resend } from 'resend';

const DEFAULT_TO_EMAIL = 'admin@nurturenestmultilingualnursery.com';
const DEFAULT_FROM_EMAIL = 'The Nurture Nest Website <onboarding@resend.dev>';
const PLACEHOLDER_RESEND_KEY = 'your_resend_api_key';
const LOCAL_SUBMISSIONS_FILE = path.join(
  process.cwd(),
  '.tmp',
  'form-submissions.ndjson'
);

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey === PLACEHOLDER_RESEND_KEY) {
    return null;
  }

  return new Resend(apiKey);
}

async function saveLocalSubmission(formType: string, fields: Record<string, unknown>) {
  await fs.mkdir(path.dirname(LOCAL_SUBMISSIONS_FILE), { recursive: true });
  await fs.appendFile(
    LOCAL_SUBMISSIONS_FILE,
    `${JSON.stringify({
      formType,
      fields,
      receivedAt: new Date().toISOString(),
    })}\n`,
    'utf8'
  );
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { formType, ...fields } = data;

    const supabase = hasSupabaseServiceRole() ? supabaseAdmin() : null;
    const resend = getResendClient();
    const toEmail = process.env.CONTACT_FORM_EMAIL || DEFAULT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;
    const allowLocalFallback = process.env.NODE_ENV !== 'production';

    let dbSaved = false;
    let emailSent = false;
    let fileSaved = false;
    let subject = 'New Form Submission';
    let htmlContent = '';
    let lastDbError: unknown = null;

    const saveFallbackSubmission = async (message: string) => {
      if (!supabase) return;

      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: fields.name || fields.parent_name || 'Unknown',
          email: fields.email || 'unknown@example.com',
          phone: fields.contact_number || fields.mobile || null,
          message,
          status: 'new',
        },
      ]);

      if (error) {
        lastDbError = error;
        console.error('Supabase fallback save failed:', error);
        return;
      }

      dbSaved = true;
    };

    const saveSubmission = async (
      table: string,
      payload: Record<string, unknown>,
      fallbackMessage?: string
    ) => {
      if (!supabase) return;

      const { error } = await supabase.from(table).insert([payload]);

      if (!error) {
        dbSaved = true;
        return;
      }

      if (error.code === 'PGRST205' && fallbackMessage) {
        await saveFallbackSubmission(fallbackMessage);
        return;
      }

      lastDbError = error;
      console.error(`Supabase save failed for ${table}:`, error);
    };

    if (formType === 'contact') {
      await saveFallbackSubmission(String(fields.message ?? ''));

      subject = `Website Contact Message from ${fields.name}`;
      htmlContent = `
        <h2>New Website Contact Message</h2>
        <p><strong>Name:</strong> ${fields.name}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Message:</strong><br/>${fields.message}</p>
      `;
    } else if (formType === 'enquiry') {
      await saveSubmission(
        'enquiries',
        {
          name: fields.name,
          email: fields.email,
          contact_number: fields.contact_number,
          enquiry_text: fields.enquiry_text,
        },
        `Enquiry: ${fields.enquiry_text ?? ''}`
      );

      subject = `New Enquiry from ${fields.name}`;
      htmlContent = `
        <h2>New General Enquiry</h2>
        <p><strong>Name:</strong> ${fields.name}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Contact Number:</strong> ${fields.contact_number}</p>
        <p><strong>Enquiry:</strong><br/>${fields.enquiry_text}</p>
      `;
    } else if (formType === 'tour') {
      await saveSubmission(
        'tours',
        {
          name: fields.name,
          email: fields.email,
          contact_number: fields.contact_number,
          preferred_type: fields.preferred_type,
          marketing_opt_in: fields.marketing_opt_in,
        },
        `Tour request. Preferred type: ${fields.preferred_type ?? 'N/A'}. Marketing opt-in: ${fields.marketing_opt_in ? 'Yes' : 'No'}.`
      );

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
      await saveSubmission(
        'applications',
        {
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
        },
        `Join application for child ${fields.child_name ?? 'N/A'} starting ${fields.start_date ?? 'N/A'}.`
      );

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

    if (resend) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          subject,
          html: htmlContent,
        });
        emailSent = true;
      } catch (error) {
        console.error('Resend email delivery failed:', error);
      }
    } else {
      console.warn('RESEND_API_KEY is not configured. Email delivery was skipped.');
    }

    if (!dbSaved && !emailSent && allowLocalFallback) {
      await saveLocalSubmission(String(formType), fields);
      fileSaved = true;
    }

    if (!dbSaved && !emailSent && !fileSaved) {
      return NextResponse.json(
        {
          error:
            lastDbError instanceof Error
              ? lastDbError.message
              : 'No form delivery backend is available. Configure Supabase or a valid Resend API key.',
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true, emailSent, dbSaved, fileSaved });
  } catch (error: any) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: error?.message || 'An error occurred during submission' },
      { status: 500 }
    );
  }
}
