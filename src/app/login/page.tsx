import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/shared/i18n/locales";

export default function LoginPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
