import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const BrandFontSelect = () => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-medium">Font</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 ml-2 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Choose fonts that represent your brand</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="border border-sec p-1 ml-auto rounded-lg">Add new</div>
      </div>

      <div className="flex flex-col">
        <Select defaultValue="newest">
          <SelectTrigger className="w-full sm:w-auto">
            <SelectValue placeholder="Created: newest first" />
          </SelectTrigger>
          <SelectContent className="overflow-y-auto h-32">
            <SelectItem value="newest">Created: newest first</SelectItem>
            <SelectItem value="oldest">Created: oldest first</SelectItem>
            <SelectItem value="name-asc">Name: A-Z</SelectItem>
            <SelectItem value="name-desc">Name: Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BrandFontSelect;
