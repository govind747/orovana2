import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface BrandSettings {
  brand_name: string;
  brand_tagline: string;
  logo_url: string;
  logo_alt_text: string;
  primary_color: string;
  secondary_color: string;
}

export const useBrandSettings = () => {
  const [brandSettings, setBrandSettings] = useState<BrandSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBrandSettings();
  }, []);

  const fetchBrandSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('brand_settings')
        .select('setting_key, setting_value')
        .eq('is_active', true);

      if (error) throw error;

      // Convert array to object
      const settings: any = {};
      data?.forEach((item) => {
        settings[item.setting_key] = item.setting_value;
      });

      setBrandSettings(settings as BrandSettings);
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching brand settings:', err);
      
      // Fallback to default values
      setBrandSettings({
        brand_name: "O'rovana",
        brand_tagline: "Himalayan Wellness",
        logo_url: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=200&h=80&fit=crop",
        logo_alt_text: "O'rovana Himalayan Wellness Logo",
        primary_color: "#1B4332",
        secondary_color: "#F5F3EE"
      });
    } finally {
      setLoading(false);
    }
  };

  return { brandSettings, loading, error, refetch: fetchBrandSettings };
};