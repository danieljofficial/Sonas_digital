import React from "react";
import { Topbar } from "./Topbar";
import { Grid } from "./Grid";

export const Dashboard = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-inter)" }}
      className="overflow-y-auto h-screen bg-[#FFFFFF] rounded-lg pb-4 shadow  border border-sec/50"
    >
      <Topbar />
      <Grid />
    </div>
  );
};
