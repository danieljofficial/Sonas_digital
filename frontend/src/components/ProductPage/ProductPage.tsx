import {
  LuSearch,
  LuChevronLeft,
  LuChevronRight,
  LuChevronDown,
  LuShoppingBag,
} from "react-icons/lu";
import Image from "next/image";
import { Sidebar } from "../Sidebar/Sidebar";
// import Sidebar from "./sidebar"

export const ProductPage = () => {
  const products = [
    {
      id: 1,
      title: "Business Card",
      image: "/placeholder.svg?height=200&width=200",
      price: "$899.00",
    },
    {
      id: 2,
      title: "Business Card",
      image: "/placeholder.svg?height=200&width=200",
      price: "$899.00",
    },
    {
      id: 3,
      title: "Business Card",
      image: "/placeholder.svg?height=200&width=200",
      price: "$899.00",
    },
    {
      id: 4,
      title: "Business Card",
      image: "/placeholder.svg?height=200&width=200",
      price: "$899.00",
    },
    {
      id: 5,
      title: "Business Card",
      image: "/placeholder.svg?height=200&width=200",
      price: "$899.00",
    },
    {
      id: 6,
      title: "Business Card",
      image: "/placeholder.svg?height=200&width=200",
      price: "$899.00",
    },
    {
      id: 7,
      title: "Business Card",
      image: "/placeholder.svg?height=200&width=200",
      price: "$899.00",
    },
    {
      id: 8,
      title: "Business Card",
      image: "/placeholder.svg?height=200&width=200",
      price: "$899.00",
    },
  ];

  return (
    <>
      <div
        style={{ fontFamily: "var(--font-inter)" }}
        className="overflow-auto bg-[#FFFFFF] rounded-lg pb-4 shadow-md mt-4"
      >
        <div className="p-3 max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 ml-8 md:ml-0">Product</h1>

          <div className="flex flex-col md:flex-row justify-between mb-6 gap-2  items-center">
            <div className="relative w-full md:w-80 text-gray-800">
              <input
                type="text"
                placeholder="Search products"
                className="w-full pl-4 pr-10 py-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <LuSearch className="absolute right-3 top-2.5 h-5 w-5 " />
            </div>

            <div className="relative w-full md:w-max">
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:outline-none">
                <span>Created: newest first</span>
                <LuChevronDown className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">12 Search result</p>
            <div className="flex items-center gap-2">
              <button className="p-1 border rounded-full border-gray-300">
                <LuChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm">Page 1/5</span>
              <button className="p-1 rounded-full border border-gray-300 bg-gray-100">
                <LuChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="space-y-1 bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-48 bg-[#F0F1F8] rounded-lg ">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover "
                  />
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full text-pri">
                    <LuShoppingBag className="h-5 w-5 " />
                  </button>
                </div>
                <div className="p-2 bg-gray-100 rounded-lg">
                  <h3 className="font-medium">{product.title}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500">Starting from</span>
                    <span className="font-semibold">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
