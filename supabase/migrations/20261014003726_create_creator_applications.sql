/*
# Create creator_applications table

1. New Tables
- `creator_applications`
  - `id` (uuid, primary key)
  - `name` (text, not null) — applicant's full name
  - `email` (text, not null) — applicant's email for follow-up
  - `type` (text, not null) — applicant type: "Chef", "Food creator", or "Small food business"
  - `idea` (text, not null) — free-text description of their idea/product/course
  - `link` (text, nullable) — optional portfolio or social link
  - `consent` (boolean, not null, default false) — whether they agreed to be contacted
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `creator_applications`.
- This is a no-auth app (no sign-in screen), so policies use `TO anon, authenticated`.
- INSERT: anyone can submit an application (public form).
- SELECT/UPDATE/DELETE: restricted to authenticated (admin review only); anon cannot read or modify submissions.

3. Notes
- Applications are write-only from the public frontend (anon can INSERT but not SELECT).
- Staff with authenticated access can review submissions via the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS creator_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  type text NOT NULL,
  idea text NOT NULL,
  link text,
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE creator_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_applications" ON creator_applications;
CREATE POLICY "anon_insert_applications"
ON creator_applications FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_read_applications" ON creator_applications;
CREATE POLICY "authenticated_read_applications"
ON creator_applications FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_update_applications" ON creator_applications;
CREATE POLICY "authenticated_update_applications"
ON creator_applications FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_applications" ON creator_applications;
CREATE POLICY "authenticated_delete_applications"
ON creator_applications FOR DELETE
TO authenticated USING (true);
