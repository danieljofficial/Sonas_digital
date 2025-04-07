import { ProductPage } from "@/components/ProductPage/ProductPage";
import React from "react";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { LuBell } from "react-icons/lu";

export default function Product() {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-[220px,_1fr] border border-black">
      <div className="md:hidden w-full bg-white absolute top-0 left-0 h-10 text-center flex items-center">
        <LuBell className="w-6 h-6 ml-auto mr-4 text-center" />
      </div>
      <Sidebar />
      <ProductPage />
    </div>
  );
}
