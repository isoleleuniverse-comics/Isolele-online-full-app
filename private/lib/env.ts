export function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getStorageBucket() {
  return process.env.SUPABASE_STORAGE_BUCKET || "articles";
}
