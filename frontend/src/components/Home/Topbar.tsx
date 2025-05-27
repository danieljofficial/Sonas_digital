import React from "react";

export const Topbar = () => {
  return (
    <div className="mb-2 p-2 ml-2 md:ml-2">
      <div
        style={{ fontFamily: "var(--font-nunito-sans)" }}
        className="font-bold text-xl md:text-3xl md:font-semibold text-pri"
      >
        Good morning Nafisat
      </div>
      <div
        style={{ fontFamily: "var(--font-nunito-sans)" }}
        className="font-medium text-gray-600 text-base md:text-lg"
      >
        Here is everything for you to stay up-to-date.
      </div>
    </div>
  );
};
