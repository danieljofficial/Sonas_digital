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
        className={`md:hidden fixed z-50 transition-all duration-300 ease-in-out top-2 left-4 `}
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <LuMenu size={24} />}
      </button>
      <div
        className={`
         top-0 fixed left-0 z-40 transform transition-all duration-300 ease-in-out px-2 md:px-0
        ${isOpen ? "translate-x-0 bg-white h-full" : "-translate-x-full"}
        md:relative md:translate-x-0 md:bg-stone-100
      `}
      >
        {/* <Header /> */}
        <div className=" opacity-0 md:opacity-100 flex mb-2 mt-0.5 p-2  transition-all">
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
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20 transition-all duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
