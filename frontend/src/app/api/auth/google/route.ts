import { NextResponse } from "next/server"

export async function GET() {
  // Redirect to your backend's Google OAuth endpoint
  // This is a placeholder - replace with your actual Google OAuth URL
  const googleAuthUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`

  // In a real implementation, you might want to include state parameters
  // for CSRF protection and redirect URLs

  return NextResponse.redirect(googleAuthUrl)
}

