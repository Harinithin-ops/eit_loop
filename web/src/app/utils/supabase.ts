import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseServiceRoleKey =
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "";

// Standard client (respects RLS - for normal auth operations)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client (bypasses RLS - for messages, follow requests in Capacitor/APK)
// NOTE: In a production web app, keep the service role key server-side only.
// For this static Capacitor APK, we embed it to ensure cross-device messaging works.
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceRoleKey || supabaseAnonKey
);
