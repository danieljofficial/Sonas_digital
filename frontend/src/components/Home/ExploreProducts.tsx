import React from "react";
import { LuShoppingBag } from "react-icons/lu";

export const ExploreProducts = () => {
  return (
    <>
      <p className="col-span-12  text-lg font-normal">Explore products</p>
      <Card title="Business card" imageUrl="/dashboard/cap.png" price={899} />
      <Card
        title="Business card"
        imageUrl="/dashboard/black_bottle.png"
        price={899}
      />
      <Card
        title="Business card"
        imageUrl="/dashboard/bagpack.png"
        price={899}
      />
      <Card
        title="Business card"
        imageUrl="/dashboard/umbrella.png"
        price={899}
      />
    </>
  );
};

const Card = ({
  title,
  imageUrl,
  price,
}: {
  title: string;
  imageUrl: string;
  price: number;
}) => {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col h-full">
      <div className="bg-[#F0F1F8] rounded-xl p-2 flex-1 min-h-0 flex flex-col">
        <div className="self-end rounded-full bg-white p-2 mb-2 z-10">
          <LuShoppingBag className="text-gray-600" />
        </div>
        <div className="flex-1 min-h-0 relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain max-h-[200px] mx-auto"
          />
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl p-2 mt-2">
        <h3 className="text-gray-950 text-base line-clamp-2  overflow-hidden">
          {title}
        </h3>
        <div className="flex justify-between items-center ">
          <span className="text-gray-600 font-normal text-xs">
            Starting from
          </span>
          <span className="text-gray-950 font-semibold text-xl">${price}</span>
        </div>
      </div>
    </div>
  );
};
