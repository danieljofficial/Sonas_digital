import { Search } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const Header = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6 md:ml-0">Orders</h1>
      <div className=" flex flex-col justify-center p-0">
        <div className=" mb-3 overflow-x-auto self-start">
          <div className="flex space-x-1 sm:space-x-4 md:space-x-8 pb-2 ">
            {["Pending", "Shipped", "Delivered"].map((tab) => (
              <button
                key={tab}
                className={`pb-2 px-1  font-bold  flex flex-row items-center ${
                  activeTab === tab
                    ? "text-acc border-b-2 border-acc"
                    : "text-pri"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <div>{tab}</div>
                <div className=" rounded-full p-1 bg-stone-100 h-7 w-7 flex justify-center items-center ml-2">
                  2
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className=" w-full flex flex-col md:flex-row justify-between mb-2">
          <div className="relative w-full sm:w-auto md:mr-2 text-gray-800 max-md:mb-2">
            <input
              type="text"
              placeholder="Search products"
              className="w-full pl-4 pr-10 py-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 " />
          </div>
          <Select defaultValue="newest">
            <SelectTrigger className="w-full sm:w-auto rounded-xl">
              <SelectValue placeholder="Created: newest first" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Created: newest first</SelectItem>
              <SelectItem value="oldest">Created: oldest first</SelectItem>
              <SelectItem value="setActiveTabname-asc">Name: A-Z</SelectItem>
              <SelectItem value="name-desc">Name: Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};
