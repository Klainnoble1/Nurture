-- Nurture Nest Supabase Row Level Security (RLS) Policies
-- Run these in the SQL Editor in your Supabase Dashboard

-- Enable RLS on all tables
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;

-- PAGES TABLE POLICIES
-- Anyone can select published pages
CREATE POLICY "Pages are publicly readable if published"
  ON pages FOR SELECT
  USING (published = true);

-- Authenticated users can select all pages
CREATE POLICY "Authenticated can view all pages"
  ON pages FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can insert pages
CREATE POLICY "Authenticated can insert pages"
  ON pages FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update pages
CREATE POLICY "Authenticated can update pages"
  ON pages FOR UPDATE
  TO authenticated
  USING (true);

-- Authenticated users can delete pages
CREATE POLICY "Authenticated can delete pages"
  ON pages FOR DELETE
  TO authenticated
  USING (true);

-- SETTINGS TABLE POLICIES
-- Anyone can read settings
CREATE POLICY "Settings are publicly readable"
  ON settings FOR SELECT
  USING (true);

-- Authenticated users can manage settings
CREATE POLICY "Authenticated can manage settings"
  ON settings FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- CONTACT SUBMISSIONS TABLE POLICIES
-- Anyone can insert contact submissions
CREATE POLICY "Contact submissions are submittable"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Only authenticated can view submissions
CREATE POLICY "Authenticated can view submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated can update submission status
CREATE POLICY "Authenticated can update submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true);

-- NEWS TABLE POLICIES
-- Anyone can read published news
CREATE POLICY "Published news is readable"
  ON news FOR SELECT
  USING (published = true);

-- Authenticated can read all news
CREATE POLICY "Authenticated can view all news"
  ON news FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated can manage news
CREATE POLICY "Authenticated can manage news"
  ON news FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- GALLERY TABLE POLICIES
-- Anyone can view gallery
CREATE POLICY "Gallery is publicly viewable"
  ON gallery FOR SELECT
  USING (true);

-- Authenticated can manage gallery
CREATE POLICY "Authenticated can manage gallery"
  ON gallery FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- STAFF TABLE POLICIES
-- Anyone can view active staff
CREATE POLICY "Active staff is publicly viewable"
  ON staff FOR SELECT
  USING (active = true);

-- Authenticated can view all staff
CREATE POLICY "Authenticated can view all staff"
  ON staff FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated can manage staff
CREATE POLICY "Authenticated can manage staff"
  ON staff FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
