"use client";

import Image from "next/image";
import { Search, ChevronDown, MoreVertical, Bell, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Header } from "./Header";

export const SavedProjects = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      style={{ fontFamily: "var(--font-inter)" }}
      className="overflow-y-auto h-screen bg-[#FFFFFF] rounded-lg pb-4 shadow-md mt-4"
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* <div className="p-4 md:p-6"> */}
        <Header />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProductCard image="/tshirt.png" title="Brand refresh 2025" />
          <ProductCard image="/beanie.png" title="Brand refresh 2025" />
          <ProductCard image="/headphones.png" title="Brand refresh 2025" />
          <ProductCard image="/headphones.png" title="Brand refresh 2025" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

function ProductCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="border rounded-md overflow-hidden">
      <div className="h-48 bg-gray-100 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-500">2 weeks ago</span>
          <div className="flex items-center">
            <button className="bg-orange-500 text-white text-xs px-2 py-1 rounded flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 11L12 14L22 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Checkout
            </button>
            <button className="ml-1 text-gray-400 hover:text-gray-600">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
