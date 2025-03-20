import React from "react";

export const Topbar = () => {
  return (
    <div className="mb-2 mt-0.5 p-2 ">
      <div
        style={{ fontFamily: "var(--font-inter)" }}
        className="font-semibold text-3xl"
      >
        Good morning Nafisat
      </div>
      <div
        style={{ fontFamily: "var(--font-nunito-sans)" }}
        className="font-medium text-pri text-lg"
      >
        Here is everything you need to get started.
      </div>
    </div>
  );
};
