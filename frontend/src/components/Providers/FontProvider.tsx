// "use client";

// import { Nunito_Sans, Inter } from "next/font/google";
// import { createContext, useContext, useEffect } from "react";

// const nunitoSans = Nunito_Sans({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-nunito-sans",
// });

// const inter = Inter({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// });

// const FontContext = createContext({ nunitoSans, inter });

// export function FontProvider({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     document.documentElement.classList.add(nunitoSans.variable, inter.variable);
//   }, []);

//   return (
//     <FontContext.Provider value={{ nunitoSans, inter }}>
//       {children}
//     </FontContext.Provider>
//   );
// }

// export function useFonts() {
//   return useContext(FontContext);
// }

"use client";

import { Nunito_Sans, Inter } from "next/font/google";
import { createContext, useContext } from "react";

const nunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const FontContext = createContext({ nunitoSans, inter });

export function FontProvider({ children }: { children: React.ReactNode }) {
  // Apply font classes immediately (before hydration)
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
