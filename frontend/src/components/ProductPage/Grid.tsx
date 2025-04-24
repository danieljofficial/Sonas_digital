"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { optimizeCloudinaryUrl } from "@/lib/image-utils";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { useQuery, useMutation } from "@tanstack/react-query";

interface Product {
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
  products: Product[];
};

async function fetchProducts(): Promise<Product[]> {
  const url = "http://localhost:8000/api/products/";
  const response = await fetch(url);
  return response.json();
}
export const Grid = () => {
  // const [products, setProducts] = useState([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  // while (isLoading) {
  //   throw new Promise(() => console.log("promising"));
  // }

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const url = "http://localhost:8000/api/products/";
  //     await new Promise((resolve) => {
  //       setTimeout(resolve, 3000);
  //     });
  //     console.log("Resolved");
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch products");
  //       }
  //       return new Promise((resolve, reject) => {

  //         const data: Product[] = await response.json();
  //         setProducts(data);
  //       })
  //       // setError(null);
  //     } catch (error: any) {
  //       // setError(
  //       //   error instanceof Error
  //       //     ? error.message
  //       //     : "An unknown error has occurred"
  //       // );
  //       console.log(error.message);
  //     } finally {
  //       // setIsLoading(false);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

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

const Card = ({ product }: { product: Product }) => {
  return (
    <div
      key={product.id}
      className="space-y-1 bg-white rounded-lg overflow-hidden shadow-sm"
    >
      <div className="relative h-48 bg-[#F0F1F8] rounded-lg ">
        <div className="flex items-center justify-center">
          <Image
            src={optimizeCloudinaryUrl(product.baseImageUrl, 50)}
            // src="https://res.cloudinary.com/ddkv17ou7/image/upload/c_fill,w_400,h_400,q_auto,f_auto,dpr_auto/v1744886491/gift-box_kxnpxv.png"
            // src="google.com"
            width={200}
            height={200}
            alt={product.name}
            className="object-cover self-center text-center"
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
