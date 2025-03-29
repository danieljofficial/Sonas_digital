import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Info, Plus } from "lucide-react";

const BrandColorSelect = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-medium">Select your brand color</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 ml-2 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Choose colors that represent your brand</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4 bg-gray-100 p-4 rounded-lg">
        <ColorSwatch color="#FF5722" code="#FF5722" />
        <ColorSwatch color="#1A237E" code="#1A237E" />
        <ColorSwatch color="#9C27B0" code="#9C27B0" />
        <ColorSwatch color="#E91E63" code="#E91E63" />
        <ColorSwatch color="#FFEB3B" code="#FFEB3B" />
        <div className="flex flex-col items-center ">
          <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 bg-gray-200">
            <Plus className="h-5 w-5 text-gray-400" />
          </button>
          <span className="mt-2 text-xs text-gray-500 ">add new</span>
        </div>
      </div>
    </div>
  );
};

function ColorSwatch({ color, code }: { color: string; code: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-12 h-12 rounded-full "
        style={{ backgroundColor: color }}
      ></div>
      <span className="mt-2 text-xs font-semibold" style={{ color: code }}>
        {code}
      </span>
    </div>
  );
}

export default BrandColorSelect;
