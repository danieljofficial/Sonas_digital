"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

interface RouteType {
  Icon: IconType;
  title: string;
  href: string;
  prefetch?: () => void;
}

export const RouteSelect = () => {
  const pathname = usePathname();
  const routes: RouteType[] = [
    {
      Icon: LuPlus,
      title: "Custom order",
      href: "/custom",
    },
    {
      Icon: LuHouse,
      title: "Home",
      href: "/home",
    },
    {
      Icon: LuPencilRuler,
      title: "Brand Kit",
      href: "/brand-kit",
    },
    {
      Icon: LuShirt,
      title: "Products",
      href: "/products",
      prefetch: () => { },
    },
    {
      Icon: LuPackage,
      title: "Orders",
      href: "/orders",
    },
    {
      Icon: LuShoppingCart,
      title: "Cart",
      href: "/cart",
    },
    {
      Icon: LuFolders,
      title: "Saved projects",
      href: "/saved-projects",
    },
    {
      Icon: LuBell,
      title: "Notifications",
      href: "/notifications",
    },
    {
      Icon: LuSettings,
      title: "Settings",
      href: "/settings",
    },
    {
      Icon: LuLogOut,
      title: "Logout",
      href: "/logout",
    },
  ];
  return (
    <div className="space-y-1 text-sec ">
      {routes.map((route, index) => {
        return (
          <Route
            Icon={route.Icon}
            title={route.title}
            href={route.href}
            key={index}
          />
        );
      })}
    </div>
  );
};

export const Route = ({
  Icon,
  title,
  href,
}: {
  Icon: IconType;
  title: string;
  href: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex text-md font-normal items-center justify-start gap-4 w-full rounded-lg p-2 transition-[box-shadow,_background-color,_color] 
      ${href === pathname
          ? "bg-[#d6d9db] text-pri font-normal shadow"
          : "hover:bg-stone-200 bg-transparent shadow-none"
        } ${title === "Logout" ? "text-red-500" : ""} ${title === "Custom order" ? "bg-red-500 text-white" : ""
        }`}
      style={{ backgroundColor: `${title === "Custom order" ? "black" : ""}` }}
    >
      <Icon />
      <span>{title}</span>
    </Link>
  );
};
