import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { firstName, lastName, companyName, email, password } = await request.json()

    // Validate input
    if (!firstName || !lastName || !companyName || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Make request to your actual signup backend
    // This is a placeholder - replace with your actual signup endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        companyName,
        email,
        password,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ message: data.message || "Signup failed" }, { status: response.status })
    }

    // Return the authentication token and user data
    return NextResponse.json({
      token: data.token,
      user: data.user,
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

