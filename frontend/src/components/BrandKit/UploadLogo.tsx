import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { CloudUpload, Info, Plus } from "lucide-react";

const UploadLogo = () => {
  return (
    <>
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
        <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg">
          <div className="bg-white border col-span-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
            <div className="w-12 h-12 flex items-center justify-center  shadow-md rounded-lg">
              <CloudUpload className="h-8 w-8 text-pri" />
            </div>
            <div className="mt-2 text-xs text-pri font-semibold text-center">
              png, jpeg, svg
            </div>
            <p className="text-xs font-medium text-sec">4mb max size</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadLogo;
