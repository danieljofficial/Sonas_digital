import React from "react";
import { Header } from "./Header";
import { RouteSelect } from "./RouteSelect";
import { Footer } from "./Footer";

export const Sidebar = () => {
  return (
    <div style={{ fontFamily: "var(--font-nunito-sans)" }}>
      <div className="overflow-y-scroll fixed h-[calc(100vh-8px-48px)]">
        <Header />
        <RouteSelect />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
