"use client";
import React, { useState } from "react";
import { Header } from "./Header";
import { RouteSelect } from "./RouteSelect";
import { Footer } from "./Footer";
import { LuMenu } from "react-icons/lu";
import { X } from "lucide-react";
import Image from "next/image";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ fontFamily: "var(--font-nunito-sans)" }}>
      <button
        className="md:hidden fixed top-9 left-4 z-50 "
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <LuMenu size={24} />}
      </button>
      <div
        className={`
        fixed left-0 z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-4 bg-stone-100 h-full" : "-translate-x-full"}
        md:relative md:translate-x-0
      `}
      >
        {/* <Header /> */}
        <div className=" mb-2 mt-0.5 p-2 flex transition-all">
          <Image
            src={"/dashboard/SonaLogo.svg"}
            alt="SonasDigital"
            width={2}
            height={2}
            className="w-44  ml-4 md:ml-0"
          />
        </div>
        <RouteSelect />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
