import { NextResponse } from "next/server";

export async function GET() {
  const googleAuthUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;

  return NextResponse.redirect(googleAuthUrl);
}
