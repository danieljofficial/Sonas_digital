import React from "react";
import { LuChevronLeft, LuChevronRight, LuSearch } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const Header = () => {
  return (
    <>
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

        <Select defaultValue="newest">
          <SelectTrigger className="w-full sm:w-auto rounded-xl">
            <SelectValue placeholder="Created: newest first" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Created: newest first</SelectItem>
            <SelectItem value="oldest">Created: oldest first</SelectItem>
            <SelectItem value="name-asc">Name: A-Z</SelectItem>
            <SelectItem value="name-desc">Name: Z-A</SelectItem>
          </SelectContent>
        </Select>
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
    </>
  );
};

// export default Header
