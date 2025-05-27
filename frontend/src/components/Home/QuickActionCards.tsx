import React from "react";
import { LuArrowRight } from "react-icons/lu";

export const QuickActionCards = () => {
  return (
    <>
      <p className="col-span-12 text-gray-950 text-lg font-normal">
        Quick actions
      </p>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl bg-gray-100 p-2 flex flex-col gap-2 overflow-hidden">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-950 font-semibold text-2xl md:text-xl">
            Start a New Design
          </h3>
          <LuArrowRight className="text-gray-600" size={25} />
        </div>

        <div className="grid grid-cols-4 grid-rows-3 gap-2 flex-1 min-h-0">
          <div className="col-span-2 row-span-3 relative bg-[#E9EAEB] rounded-xl overflow-hidden">
            <span className="absolute top-2 left-2 rounded-full px-2 py-1 border border-blue-600 bg-transparent font-normal text-xs z-10">
              New
            </span>
            <img
              className="w-full h-full object-contain max-h-full p-4"
              src="/dashboard/water-bottles-double.png"
              alt="Bottle designs"
            />
          </div>
          <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden bg-[#D3D6EB]">
            <img
              className=" h-full object-contain max-h-full"
              src="/dashboard/kit_small.png"
              alt="Design kit"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-[#FFEAD5]">
            <img
              className="w-full h-full object-contain max-h-full"
              src="/dashboard/menu_small.png"
              alt="Menu"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden bg-white">
            <img
              className="w-full h-full object-contain max-h-full"
              src="/dashboard/bag.png"
              alt="Shopping bag"
            />
          </div>
        </div>
      </div>

      <Card title={"Brand your event"} imageUrl="/dashboard/podium.png" />

      <div className="col-span-12 sm:col-span-6  border-yellow-500 bg-gray-100 lg:col-span-4 p-2 rounded-xl box-border overflow-hidden flex flex-col">
        <div className=" flex flex-row justify-between items-center mb-2">
          <div className="text-gray-950 font-semibold text-2xl md:text-xl">
            Access brand kit
          </div>
          <LuArrowRight className="text-gray-600" size={25} />
        </div>
        <div className=" rounded-lg flex flex-shrink justify-center gap-2 bg-[#FFFFFF] p-2 h-full flex-1 items-center">
          <ColorCard color="#FFBF18" />
          <ColorCard color="#100E34" />
          <ColorCard color="#4F48EC" />
          <ColorCard color="#ffc0cb" />
        </div>
      </div>
    </>
  );
};

const ColorCard = ({ color }: { color: string }) => {
  return (
    <div className="text-center min-w-0 h-fit">
      <div
        className={`p-4 rounded-xl shadow-md h-[6.5rem] `}
        style={{ backgroundColor: color }}
      ></div>
      <div
        className={`text-center m-1 text-[10px] font-bold `}
        style={{ color: color }}
      >
        {color}
      </div>
    </div>
  );
};

const Card = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  return (
    <div className="col-span-12 sm:col-span-6  border-red-500 bg-gray-100 lg:col-span-4 p-2 rounded-xl flex flex-col ">
      <div className=" flex flex-row justify-between items-center mb-2">
        <div className="text-gray-950  font-semibold text-2xl md:text-xl">
          {title}
        </div>
        <LuArrowRight className="text-gray-600" size={25} />
      </div>
      {/* <div className=" overflow-hidden rounded-lg"> */}
      <img
        className=" flex-1 w-full h-auto max-h-[300px] object-contain rounded-lg"
        src={imageUrl}
        alt={title}
      />
      {/* </div> */}
    </div>
  );
};
