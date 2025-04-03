import ResponsiveSidebar from "@/components/responsive-sidebar";
import ResponsiveSettingsPage from "@/components/Settings/SettingsPage";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import React from "react";
// import ResponsiveSettingsPage from "../../../app/settings/responsive-page";

const page = () => {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-[220px,_1fr]">
      {/* <ResponsiveSidebar /> */}
      <Sidebar />
      <ResponsiveSettingsPage />
    </div>
  );
};

export default page;
