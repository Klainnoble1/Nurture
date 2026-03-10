import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminAuth';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabase = supabaseAdmin();

    const [enquiriesRes, toursRes, applicationsRes] = await Promise.all([
      supabase.from('enquiries').select('*').order('created_at', { ascending: false }),
      supabase.from('tours').select('*').order('created_at', { ascending: false }),
      supabase.from('applications').select('*').order('created_at', { ascending: false }),
    ]);

    return NextResponse.json({
      enquiries: enquiriesRes.data ?? [],
      tours: toursRes.data ?? [],
      applications: applicationsRes.data ?? [],
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
