import React from "react";
import { LuShoppingBag } from "react-icons/lu";

export const ExploreProducts = () => {
  return (
    <>
      <p className="col-span-12">Explore products</p>
      <Card title="Business card" imageUrl="/dashboard/cap.png" price={899} />
      <Card
        title="Business card"
        imageUrl="/dashboard/bagpack.png"
        price={899}
      />
      <Card
        title="Business card"
        imageUrl="/dashboard/bagpack.png"
        price={899}
      />
      <Card
        title="Business card"
        imageUrl="/dashboard/bagpack.png"
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
    <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-2">
      <div className="bg-[#F0F1F8] rounded-xl p-2">
        <div className="float-right rounded-full bg-[#FFFFFF] p-2">
          <LuShoppingBag />
        </div>
        <img src={imageUrl} alt="" />
      </div>

      <div className="bg-gray-100 rounded-xl p-2">
        <div className="text-gray-950 text-base">{title}</div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-normal text-xs ">
            Starting from
          </span>
          <span className="text-gray-950 font-semibold text-xl">${price}</span>
        </div>
      </div>
    </div>
  );
};
