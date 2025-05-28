import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { Poppins, Nunito_Sans, Inter } from "next/font/google";
import QueryProvider from "@/components/QueryProvider";
import SessionProviders from "@/components/Providers/SessionProviders";
import { AuthProvider } from "@/contexts/auth-context";
import { FontProvider } from "@/components/Providers/FontProvider";

export const metadata: Metadata = {
  title: "Sonas digital",
  description: "Sonas digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/nunito-sans-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body className={` font-sans antialiased text-stone-950 bg-stone-100`}>
        {/* <SessionProviders> */}
        <FontProvider>
          <QueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </QueryProvider>
        </FontProvider>
        {/* </SessionProviders> */}
      </body>
    </html>
  );
}
