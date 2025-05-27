import { BACKEND_URL } from "@/utils/constants";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, companyName, email, password } =
      await request.json();
    const name = firstName + lastName;
    if (!firstName || !lastName || !companyName || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const response = await fetch(`${BACKEND_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        companyName,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || "Signup failed" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      token: data.token,
      user: data.user,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
