import { createClient } from "@supabase/supabase-js";
import { getRequiredEnv } from "@private/lib/env";

export function getSupabaseServerClient() {
  return createClient(
    getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL"),
    getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"),
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}
