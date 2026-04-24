import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  void children;
  redirect(`/${DEFAULT_LOCALE}`);
}
