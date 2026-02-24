/*
  # Brand Settings Table

  1. New Tables
    - `brand_settings` - Store brand information including logo, name, and other settings

  2. Security
    - Enable RLS on brand_settings table
    - Add policies for public read access

  3. Features
    - Store logo URL (supports PNG, GIF, etc.)
    - Store brand name and other settings
    - Public read access for displaying brand information
*/

-- Brand settings table
CREATE TABLE IF NOT EXISTS brand_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key text UNIQUE NOT NULL,
  setting_value text NOT NULL,
  setting_type text DEFAULT 'text' CHECK (setting_type IN ('text', 'image', 'url', 'json')),
  description text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE brand_settings ENABLE ROW LEVEL SECURITY;

-- Brand settings policies (public read)
CREATE POLICY "Brand settings are viewable by everyone" ON brand_settings
  FOR SELECT TO authenticated, anon
  USING (is_active = true);

-- Allow authenticated users to manage brand settings (for admin purposes)
CREATE POLICY "Authenticated users can manage brand settings" ON brand_settings
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add updated_at trigger
CREATE TRIGGER update_brand_settings_updated_at BEFORE UPDATE ON brand_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default brand settings
INSERT INTO brand_settings (setting_key, setting_value, setting_type, description) VALUES
('brand_name', 'O''rovana', 'text', 'Main brand name'),
('brand_tagline', 'Himalayan Wellness', 'text', 'Brand tagline'),
('logo_url', 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=200&h=80&fit=crop', 'image', 'Main logo URL'),
('logo_alt_text', 'O''rovana Himalayan Wellness Logo', 'text', 'Logo alt text for accessibility'),
('primary_color', '#1B4332', 'text', 'Primary brand color'),
('secondary_color', '#F5F3EE', 'text', 'Secondary brand color')
ON CONFLICT (setting_key) DO NOTHING;