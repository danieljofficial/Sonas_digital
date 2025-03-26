import React from "react";
import { Header } from "./Header";
import { RouteSelect } from "./RouteSelect";
import { Footer } from "./Footer";
import { LuMenu } from "react-icons/lu";

export const Sidebar = () => {
  return (
    <div style={{ fontFamily: "var(--font-nunito-sans)" }}>
      <div className="overflow-y-auto fixed h-screen ">
        {/* <Header /> */}
        <div className=" mb-2 mt-0.5 p-2 flex">
          <img
            src="/dashboard/SonaLogo.svg"
            className="md:block hidden"
            alt=""
          />
          <LuMenu className="md:hidden block float-right" />
        </div>
        <RouteSelect />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
