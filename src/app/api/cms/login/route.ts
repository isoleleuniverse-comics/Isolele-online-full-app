import { NextResponse } from "next/server";
import { setCmsSession, verifyCmsPassword } from "@private/lib/auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");

  if (!verifyCmsPassword(password)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const response = NextResponse.redirect(new URL("/dashboard/articles", request.url), 303);
  setCmsSession(response);
  return response;
}
