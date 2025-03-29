import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate input
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 })
    }

    // Make request to your actual password reset backend
    // This is a placeholder - replace with your actual password reset logic
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || "Password reset request failed" },
        { status: response.status },
      )
    }

    // Return success response
    return NextResponse.json({
      message: "Password reset email sent successfully",
    })
  } catch (error) {
    console.error("Password reset error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

