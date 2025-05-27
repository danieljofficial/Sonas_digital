import { Header } from "./Header";
import { Grid } from "./Grid";
import { Suspense, useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  baseImageUrl: string;
  imagePublicId: string;
  createdAt: string;
  updatedAt: string;
  customizable: boolean;
}

export const ProductPage = () => {
  return (
    <>
      <div
        style={{ fontFamily: "var(--font-inter)" }}
        className="overflow-y-auto h-screen bg-[#FFFFFF] rounded-lg pb-4 shadow-md mt-4"
      >
        <div className="p-3 max-w-7xl mx-auto">
          <Header />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grid />
          </Suspense>
        </div>
      </div>
    </>
  );
};
