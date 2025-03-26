import BrandKit from "@/components/BrandKit/BrandKit";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import React from "react";

const BrandKitPage = () => {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px,_1fr] border border-red-500">
      <Sidebar />
      <BrandKit />
    </div>
  );
};

export default BrandKitPage;
