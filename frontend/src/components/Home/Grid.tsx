import React from "react";
import { QuickActionCards } from "./QuickActionCards";
import { ExploreProducts } from "./ExploreProducts";
import Image from "next/image";
import { Hero } from "./Hero";

export const Grid = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-nunito-sans)" }}
      className="px-4 gap-2 lg:gap-3 grid  grid-cols-12 w-full max-w-[1440px] mx-auto text "
    >
      <Hero />
      <QuickActionCards />
      <ExploreProducts />
    </div>
  );
};
