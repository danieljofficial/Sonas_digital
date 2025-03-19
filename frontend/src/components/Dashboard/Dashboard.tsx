import React from "react";
import { Topbar } from "./Topbar";

export const Dashboard = () => {
  return (
    <div
      // style={{ fontFamily: "var(--font-inter)" }}
      className=" bg-white rounded-lg pb-4 shadow h-[200vh] border border-sec/50"
    >
      <Topbar />
    </div>
  );
};
