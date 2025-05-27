"use client";

import type React from "react";

import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/utils/constants";
import { useAuth } from "@/contexts/auth-context";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log(data);

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      if (data.backendTokens) {
        const parsedToken = JSON.stringify(data.backendTokens);
        login(parsedToken);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);

      window.location.href = "/api/auth/google";
    } catch (err: any) {
      setError(err.message || "An error occurred with Google login");
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address to reset password");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Password reset request failed");
      }

      alert("Password reset link has been sent to your email");
    } catch (err: any) {
      setError(err.message || "An error occurred with password reset");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-4 sm:p-6 md:p-8">
        <div className="mb-4 sm:mb-6 text-center">
          <h1 className="text-base sm:text-lg font-normal text-gray-700">
            Welcome to Sonasdigitals - Lets get started
          </h1>
        </div>

        {error && (
          <div className="mb-4 rounded bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3 sm:mb-4">
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Work email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
              disabled={isLoading}
              required
            />
          </div>

          <div className="mb-3 sm:mb-4">
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                disabled={isLoading}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                disabled={isLoading}
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            className="relative mb-4 flex w-full items-center justify-center rounded-xl bg-orange-500 py-2 text-white hover:bg-orange-600 disabled:bg-orange-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <span>Login</span>
                <span className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-orange-400 text-xs">
                  •
                </span>
              </>
            )}
          </button>

          <div className="mb-4 sm:mb-6 text-center">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-gray-500 hover:text-gray-700"
              disabled={isLoading}
            >
              forgot password?
            </button>
          </div>

          <div className="text-center">
            <p className="mb-3 sm:mb-4 text-sm text-gray-500">
              Or sign in with
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex items-center justify-center rounded-xl border border-gray-300 p-2 hover:bg-gray-50 disabled:bg-gray-100"
                disabled={isLoading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <g transform="matrix(1, 0, 0, 1, 0, 0)">
                    <path
                      d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.18,13.83L12.18,13.83L12.18,13.83L12.18,13.83L12.18,13.83Z"
                      fill="#4285F4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
