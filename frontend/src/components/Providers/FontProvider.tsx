"use client";

import { Nunito_Sans, Inter } from "next/font/google";
import { createContext, useContext } from "react";
import { FiPauseCircle } from "react-icons/fi";

const nunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  adjustFontFallback: false,
});

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: false,
});

const FontContext = createContext({ nunitoSans, inter });

export function FontProvider({ children }: { children: React.ReactNode }) {
  if (typeof document !== "undefined") {
    document.documentElement.classList.add(nunitoSans.variable, inter.variable);
  }

  return (
    <FontContext.Provider value={{ nunitoSans, inter }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFonts() {
  return useContext(FontContext);
}
