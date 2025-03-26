import React from "react";
import { LuArrowRight } from "react-icons/lu";

export const QuickActionCards = () => {
  return (
    <>
      <p className="col-span-12 text-gray-950 text-lg font-normal">
        Quick actions
      </p>
      <div className="lg:col-span-4 col-span-6 box-border rounded-xl bg-gray-100 p-2 flex flex-col ">
        <div className=" p-0   flex flex-row justify-between items-center">
          <div className="text-gray-950 font-semibold text-xl">
            Start a new design
          </div>
          <LuArrowRight width={"50"} />
        </div>
        <div className="grid grid-cols-4 grid-rows-3 flex-1 h-full">
          <div className="col-span-2 row-span-3 bg-[#E9EAEB] rounded-xl p-2">
            <span className="rounded-full px-2 py-1 border border-blue-600 font-normal text-xs">
              New
            </span>
            <img
              className="w-full h-full"
              src="/dashboard/bottles.png"
              alt=""
            />
          </div>
          <div className="col-span-2 row-span-2">
            <img className="w-full h-full" src="/dashboard/kit.png" alt="" />
          </div>
          <div className="col-span-2 row-span-1 flex flex-row">
            <img className="w-full h-full" src="/dashboard/menu.png" alt="" />
            <img className="w-full h-full" src="/dashboard/bag.png" alt="" />
          </div>
        </div>
        {/* <div className="row-span-1">
        </div> */}
      </div>
      <Card title={"Brand your event"} imageUrl="/dashboard/event.png" />

      <div className="bg-gray-100 lg:col-span-4 col-span-6 p-2 rounded-xl box-border overflow-hidden flex flex-col">
        <div className=" flex flex-row justify-between items-center mb-2">
          <div className="text-gray-950 font-semibold text-xl">
            Access brand kit
          </div>
          <LuArrowRight width={"50"} />
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
    <div className="bg-gray-100 lg:col-span-4 col-span-6 p-2 rounded-xl flex flex-col ">
      <div className=" flex flex-row justify-between items-center mb-2">
        <div className="text-gray-950 font-semibold text-xl">{title}</div>
        <LuArrowRight width={"50"} />
      </div>
      <img className="h-full flex-1" src={imageUrl} alt="" />
    </div>
  );
};
