import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

const COOKIE_NAME = "isolele_cms_session";

function getSessionSecret() {
  return process.env.CMS_SESSION_SECRET || "dev-cms-session-secret";
}

export function isCmsRequestAuthenticated(request: NextRequest) {
  return request.cookies.get(COOKIE_NAME)?.value === getSessionSecret();
}

export async function isCmsAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === getSessionSecret();
}

export async function requireCmsAuth() {
  if (!(await isCmsAuthenticated())) {
    throw new Error("CMS_UNAUTHORIZED");
  }
}

export function verifyCmsPassword(password: string) {
  const expected = process.env.CMS_ADMIN_PASSWORD||"12345678";
  return !!expected && password === expected;
}

export function setCmsSession(response: NextResponse) {
  response.cookies.set(COOKIE_NAME, getSessionSecret(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export function clearCmsSession(response: NextResponse) {
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}
