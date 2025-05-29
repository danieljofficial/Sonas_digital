"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { optimizeCloudinaryUrl } from "@/lib/image-utils";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { useQuery, useMutation } from "@tanstack/react-query";
import ProductModal from "./ProductModal";
import { BACKEND_URL } from "@/utils/constants";

export interface ProductTypes {
  id: string;
  name: string;
  description: string;
  price: number;
  baseImageUrl: string;
  imagePublicId: string;
  createdAt: string;
  updatedAt: string;
}
type ProductListProps = {
  products: ProductTypes[];
};

async function fetchProducts(): Promise<ProductTypes[]> {
  const url = `${BACKEND_URL}/api/products/`;
  const response = await fetch(url);
  return response.json();
}

export const Grid = () => {
  console.log("Client cache miss");
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    const arr = "abcdefghij";
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {arr.split("").map((i) => (
          <SkeletonCard key={uuid()} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map((product, index) => (
          <Card product={product} key={uuid()} />
        ))}
      </div>
    </>
  );
};

const Card = ({ product }: { product: ProductTypes }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductTypes | null>(
    null
  );

  return (
    <div
      key={product.id}
      className="space-y-1 bg-white rounded-lg overflow-hidden shadow-sm"
    >
      <div className="relative h-48 bg-[#F0F1F8] rounded-lg ">
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedProduct(product)}
        >
          <Image
            src={optimizeCloudinaryUrl(product.baseImageUrl, 50)}
            width={150}
            height={150}
            alt={product.name}
            className="object-contain self-center text-center"
          />
        </div>

        <button className="absolute top-2 right-2 p-2 bg-white rounded-full text-pri">
          <LuShoppingBag className="h-5 w-5 " />
        </button>
      </div>
      <div className="p-2 bg-gray-100 rounded-lg">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-500">Starting from</span>
          <span className="font-semibold">{product.price}</span>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

const SkeletonCard = () => {
  return (
    <div className="space-y-1 rounded-lg overflow-hidden shadow-sm">
      <Skeleton className="relative h-48 rounded-lg "></Skeleton>
      <div className="p-2 bg-gray-100 rounded-lg">
        <Skeleton className="h-4 w-[70%] mb-2"></Skeleton>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-[50%]"></Skeleton>
          <Skeleton className="h-4 w-[20%]"></Skeleton>
        </div>
      </div>
    </div>
  );
};
