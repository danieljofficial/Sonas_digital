import React from "react";
import { Input } from "../ui/input";
import { Plus, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Header = () => {
  return (
    <>
      <div className=" flex flex-col  justify-between  mb-6">
        <h1 className="md:ml-0 text-3xl font-semibold mb-6 ">Brand Kit</h1>
        <div className=" w-full sm:w-auto flex flex-col md:flex-row justify-between">
          <div className="relative w-full sm:w-auto md:mr-2 text-gray-800 max-md:mb-2">
            <Input
              type="text"
              placeholder="Search brand kit"
              className="pl-4 pr-10  py-4 w-full rounded-xl"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <button className="border border-sec flex py-2 px-2 rounded-lg text-pri font-semibold text-sm justify-center items-center">
            <Plus />
            <div>Add new</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
