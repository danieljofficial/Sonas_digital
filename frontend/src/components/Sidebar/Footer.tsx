import React from "react";
import { Route } from "./RouteSelect";
import { LuBell, LuLogOut, LuSettings } from "react-icons/lu";

export const Footer = () => {
  return (
    <div className=" flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 justify-end text-sm font-normal text-sec space-y-1 border border-black">
      <Route Icon={LuBell} title={"Notifications"} href={""} />
      <Route Icon={LuSettings} title={"Settings"} href={""} />
      <Route Icon={LuLogOut} title={"Logout"} href={""} />
    </div>
  );
};
