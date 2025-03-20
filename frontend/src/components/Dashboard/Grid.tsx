import React from "react";
import { QuickActionCards } from "./QuickActionCards";

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <div className=" col-span-12">
        <img src="/dashboard/wideImage.png" className="w-full" alt="" />
      </div>

      <QuickActionCards />
    </div>
  );
};
