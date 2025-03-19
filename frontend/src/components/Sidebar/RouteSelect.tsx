import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import {
  LuBell,
  LuFolders,
  LuHouse,
  LuLogOut,
  LuPackage,
  LuPencilRuler,
  LuPlus,
  LuSettings,
  LuShirt,
  LuShoppingCart,
} from "react-icons/lu";

export const RouteSelect = () => {
  return (
    <div className="space-y-1 text-sec ">
      <Route selected={true} Icon={LuPlus} title={"Custom order"} href={""} />
      <Route selected={false} Icon={LuHouse} title={"Home"} href={""} />
      <Route
        selected={false}
        Icon={LuPencilRuler}
        title={"Brand Kit"}
        href={""}
      />
      <Route selected={false} Icon={LuShirt} title={"Product"} href={""} />
      <Route selected={false} Icon={LuPackage} title={"Orders"} href={""} />
      <Route selected={false} Icon={LuShoppingCart} title={"Cart"} href={""} />
      <Route
        selected={false}
        Icon={LuFolders}
        title={"Saved Projects"}
        href={""}
      />
      <Route selected={false} Icon={LuBell} title={"Notifications"} href={""} />
      <Route selected={false} Icon={LuSettings} title={"Settings"} href={""} />
      <Route selected={false} Icon={LuLogOut} title={"Logout"} href={""} />
    </div>
  );
};

export const Route = ({
  selected,
  Icon,
  title,
  href,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={`flex text-md font-normal items-center justify-start gap-4 w-full rounded-lg py-3 px-2 transition-[box-shadow,_background-color,_color] 
      ${
        selected
          ? "bg-[#d6d9db] text-pri font-normal shadow"
          : "hover:bg-stone-200 bg-transparent shadow-none"
      } ${title === "Logout" ? "text-red-500" : ""}`}
    >
      <Icon />
      <span>{title}</span>
    </Link>
  );
};
