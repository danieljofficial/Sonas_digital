import { ProductPage } from "@/components/ProductPage/ProductPage";
import React from "react";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Product() {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px,_1fr] border border-black">
      <Sidebar />
      <ProductPage />
    </div>
  );
}
