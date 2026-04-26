"use client";

import { createBrowserClient } from "@supabase/ssr";

export function hasSupabaseClientEnv() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) && Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export function createClient() {
  if (!hasSupabaseClientEnv()) {
    throw new Error("Configuration Supabase manquante: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  }

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  );
}
