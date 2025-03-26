import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Search, Plus, Edit2, Trash2, Info } from "lucide-react";
import BrandColorSelect from "./BrandColorSelect";

const BrandKit = () => {
  return (
    <>
      {/* <div className="overflow-auto p-4 sm:p-6 lg:p-8 border border-black"> */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 sm:mb-0">Brand Kit</h1>
          <div className="w-full sm:w-auto flex items-center">
            <div className="relative w-full sm:w-64 mr-2">
              <Input
                type="text"
                placeholder="Search brand kit"
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-full sm:w-auto">
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
        </div>

        {/* Upload brand logo section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-medium">Upload your brand logo</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 ml-2 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Upload your brand logo in SVG or PNG format</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="bg-white border rounded-md p-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4L4 14L24 24L44 14L24 4Z" fill="#FF5722" />
                  <path
                    d="M4 34L24 44L44 34V14L24 24L4 14V34Z"
                    fill="#FF5722"
                    opacity="0.8"
                  />
                </svg>
              </div>
              <div className="mt-2 text-xs text-center">
                <div className="font-medium">Sonas-icon1.svg</div>
                <div className="text-gray-500">svg · 2months ago</div>
              </div>
            </div>
            <div className="bg-white border rounded-md p-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <div className="bg-white p-1 rounded">
                  <svg
                    width="100"
                    height="24"
                    viewBox="0 0 100 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF5722" />
                    <path
                      d="M2 17L12 22L22 17V7L12 12L2 7V17Z"
                      fill="#FF5722"
                      opacity="0.8"
                    />
                    <path d="M30 6H34V18H30V6Z" fill="#333" />
                    <path
                      d="M38 6H48C50 6 52 8 52 10V14C52 16 50 18 48 18H38V6ZM42 10V14H46C46.5 14 47 13.5 47 13V11C47 10.5 46.5 10 46 10H42Z"
                      fill="#333"
                    />
                    <path
                      d="M56 6H66C68 6 70 8 70 10V14C70 16 68 18 66 18H56V6ZM60 10V14H64C64.5 14 65 13.5 65 13V11C65 10.5 64.5 10 64 10H60Z"
                      fill="#333"
                    />
                    <path
                      d="M74 6H84C86 6 88 8 88 10V18H84V10H78V18H74V6Z"
                      fill="#333"
                    />
                    <path d="M92 6H96V18H92V6Z" fill="#333" />
                  </svg>
                </div>
              </div>
              <div className="mt-2 text-xs text-center">
                <div className="font-medium">Sonas-icon2.png</div>
                <div className="text-gray-500">image · 2months ago</div>
              </div>
            </div>
            <div className="bg-white border border-dashed rounded-md p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
              <div className="w-16 h-16 flex items-center justify-center">
                <Plus className="h-8 w-8 text-gray-400" />
              </div>
              <div className="mt-2 text-xs text-gray-500 text-center">
                add new
              </div>
            </div>
          </div>
        </div>

        <BrandColorSelect />
      </div>
      {/* </div> */}
    </>
  );
};

export default BrandKit;
