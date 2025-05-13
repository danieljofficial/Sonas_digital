"use client";
import { useQuery } from "@tanstack/react-query";
import Header from "./Header";
import Image from "next/image";

interface BrandKitTypes {
  id: string;
  userId: string;
  name: string;
  logoUrl: string;
  colours: string[];
  fonts: string[];
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export const ViewBrandKits = () => {
  async function fetchBrandKits(): Promise<BrandKitTypes[]> {
    const url = "http://localhost:8000/api/brand-kit/";
    const response = await fetch(url);
    return response.json();
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["brand-kit"],
    queryFn: fetchBrandKits,
  });

  console.log(data);
  return (
    <div className="border border-black bg-white rounded-lg shadow-md p-3 max-md:mt-4">
      <Header />
      {/* {data?.map((brandKit) => (
        <Card brandKit={brandKit} />
      ))} */}
      <div className="flex flex-col"></div>
    </div>
  );
};

const Card = ({ brandKit }: { brandKit: BrandKitTypes }) => {
  return (
    <div className="relative h-48 bg-transparent rounded-lg ">
      <div className="flex items-center justify-center cursor-pointer">
        <Image
          src={brandKit.logoUrl}
          width={150}
          height={150}
          alt={brandKit.name}
          className="object-cover self-center text-center"
        />
      </div>
      <div className="p-2">
        <h3>{brandKit.name}</h3>
        <div>
          <span>{brandKit.updatedAt}</span>
        </div>
      </div>
    </div>
  );
};
