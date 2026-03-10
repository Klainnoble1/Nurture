-- Supabase Setup Script for Nurture Nest Website
-- Run this script in your Supabase SQL Editor

-- 1. Create a table for general Enquiries (Contact Us / Enquiries Page)
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    contact_number TEXT NOT NULL,
    enquiry_text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- 2. Create a table for Nursery Tours (Pop-out form)
CREATE TABLE IF NOT EXISTS public.tours (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    contact_number TEXT NOT NULL,
    preferred_type TEXT NOT NULL CHECK (preferred_type IN ('Online video call (Teams, Zoom or WhatsApp)', 'In person', 'Open day')),
    marketing_opt_in BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed'))
);

-- 3. Create a table for "Join our nursery!" Applications
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    parent_name TEXT NOT NULL,
    parent_dob DATE,
    mobile TEXT NOT NULL,
    email TEXT NOT NULL,
    child_name TEXT NOT NULL,
    child_dob DATE NOT NULL,
    child_age TEXT NOT NULL,
    start_date TEXT NOT NULL,
    has_multiple_children BOOLEAN DEFAULT false,
    -- Additional child details (JSON is good here for varying numbers of siblings)
    additional_children JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'waitlisted'))
);

-- 4. Create a table for Gallery Images metadata
CREATE TABLE IF NOT EXISTS public.gallery_images (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT,
    category TEXT NOT NULL CHECK (category IN ('Baby room', 'Toddler room', 'Preschool room', 'Garden area')),
    image_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Note: For the actual image files, you should use Supabase Storage.
-- Make sure to create a public bucket named 'gallery' in your Supabase dashboard.

-- Optional: Set up Row Level Security (RLS) to protect your data.
-- For a public website submitting forms, you typically want to allow inserts from anon role,
-- but restrict selects/updates to the authenticated admin role.

-- Enable RLS
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Create policies for unauthenticated insertions (anyone can submit a form)
CREATE POLICY "Allow anonymous inserts to enquiries" ON public.enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts to tours" ON public.tours FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Allow anonymous inserts to applications" ON public.applications FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Create policies for gallery_images
-- Anyone can read images
CREATE POLICY "Allow public read access to gallery images" ON public.gallery_images FOR SELECT TO anon, authenticated USING (true);
-- Only authenticated users can insert/update/delete gallery images (admin)
-- You will need to implement authentication in the dashboard to use these safely.
-- By default, no insert policy for anon means they cannot add images.

-- To view everything from the dashboard without constraints in development,
-- you can temporarily create these permissive select policies:
CREATE POLICY "Allow all selects for local development" ON public.enquiries FOR SELECT USING (true);
CREATE POLICY "Allow all selects for local development" ON public.tours FOR SELECT USING (true);
CREATE POLICY "Allow all selects for local development" ON public.applications FOR SELECT USING (true);

-- Remember to remove the permissive select policies before going to production!
