import Image from "next/image";
import React from "react";

export const Grid = () => {
  return (
    <div className="space-y-2">
      <OrderItem
        createdAt="Feb 24, 2025"
        imgUrl="ht"
        description="Signature snapback cap"
        quantity={23}
      />
      <OrderItem
        createdAt="Feb 24, 2025"
        imgUrl="ht"
        description="Signature snapback cap"
        quantity={23}
      />
    </div>
  );
};

const OrderItem = ({
  imgUrl,
  description,
  quantity,
  createdAt,
}: {
  imgUrl: string;
  description: string;
  quantity: number;
  createdAt: string;
}) => {
  return (
    <div className="border rounded-lg p-1">
      <div className=" flex">
        <div className="font-semibold mb-1">{createdAt}</div>
        <div className="rounded-xl p-1 text-green-600 border border-green-600 h-fit text-xs font-medium ml-auto">
          Delivered
        </div>
      </div>

      <div className="flex">
        <div className="border p-5 bg-[#F0F1F8] rounded-lg">
          <Image
            src={"/dashboard/cap.png"}
            alt="cartItem"
            className="w-10 h-10"
            width={1}
            height={2}
          />
        </div>
        <div className="ml-1">
          <p className="font-semibold text-sm">{description}</p>
          <div className="text-sm">Qty: {quantity}</div>
          <div className="border border-black p-2 font-semibold text-sm rounded-xl text-center">
            Buy it again
          </div>
        </div>
      </div>
    </div>
  );
};
