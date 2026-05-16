import { NextResponse } from "next/server";
import { clearCmsSession } from "@private/lib/auth";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/dashboard/login", request.url), 303);
  clearCmsSession(response);
  return response;
}
