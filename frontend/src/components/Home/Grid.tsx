import React from "react";
import { QuickActionCards } from "./QuickActionCards";
import { ExploreProducts } from "./ExploreProducts";

export const Grid = () => {
  return (
    <div className="px-4 grid gap-2 grid-cols-12 lg:gap-3 w-fit">
      <div className=" col-span-12">
        <img src="/dashboard/wideImage.png" className="w-full" alt="" />
      </div>
      <QuickActionCards />
      <ExploreProducts />
    </div>
  );
};
