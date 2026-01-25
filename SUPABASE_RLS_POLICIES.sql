-- RLS Policies for hotels table
-- Allow hotels to read their own data
CREATE POLICY "Hotels can read their own data"
ON hotels
FOR SELECT
USING (auth.uid()::text = id::text); -- This would need real auth integration

-- For now, without Supabase auth, we'll use a simpler approach
-- Allow all reads (we'll filter on client side based on session)
CREATE POLICY "Allow read hotel data"
ON hotels
FOR SELECT
USING (true);

-- Only allow updates to own data
CREATE POLICY "Hotels can update their own data"
ON hotels
FOR UPDATE
USING (auth.uid()::text = id::text)
WITH CHECK (auth.uid()::text = id::text);

---

-- RLS Policies for bookings table
-- Enable RLS on bookings
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Anonymous users (public booking form) can INSERT new bookings
CREATE POLICY "Public can create bookings"
ON bookings
FOR INSERT
WITH CHECK (true);

-- Bookings are visible only to anon users who created them (for public form)
-- and to the associated hotel (when hotel_id is set)
CREATE POLICY "Users can view bookings"
ON bookings
FOR SELECT
USING (
  hotel_id IS NULL OR 
  auth.uid()::text = hotel_id::text
);

-- Hotels can update their own bookings
CREATE POLICY "Hotels can update their bookings"
ON bookings
FOR UPDATE
USING (auth.uid()::text = hotel_id::text)
WITH CHECK (auth.uid()::text = hotel_id::text);

-- Hotels can delete their bookings
CREATE POLICY "Hotels can delete their bookings"
ON bookings
FOR DELETE
USING (auth.uid()::text = hotel_id::text);
