"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LuMinus, LuPlus, LuTrash, LuTrash2 } from "react-icons/lu";

export const Cart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 max-md:mt-4">
      <h1 className="text-3xl font-semibold mb-6 md:ml-0">Cart</h1>
      <div className=" border-black grid grid-cols-6 gap-2">
        <CartItem
          imgUrl="ht"
          description="Wide mouth plastic water bottle"
          price={9.1}
        />
        <CartItem
          imgUrl="ht"
          description="Wide mouth plastic water bottle"
          price={9.1}
        />
        <CartItem
          imgUrl="ht"
          description="Wide mouth plastic water bottle"
          price={9.1}
        />
        <CartItem
          imgUrl="ht"
          description="Wide mouth plastic water bottle"
          price={9.1}
        />
        <CartItem
          imgUrl="ht"
          description="Wide mouth plastic water bottle"
          price={9.1}
        />
      </div>
      <div className="bg-acc px-6 py-3 font-semibold text-white text-base mt-4 rounded-lg text-center min-[388px]:max-w-fit">
        Checkout
      </div>
    </div>
  );
};

const CartItem = ({
  imgUrl,
  description,
  price,
}: {
  imgUrl: string;
  description: string;
  price: number;
}) => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div className="border flex p-1 gap-1 rounded-md col-span-6 sm:col-span-3 lg:col-span-2 max-w-fit mx-auto transition-all">
      <div className="p-5 bg-[#F0F1F8] rounded-lg">
        <Image
          src={"/dashboard/cap.png"}
          alt="cartItem"
          className="w-10 h-10"
          width={1}
          height={2}
        />
      </div>
      <div className=" border-red-500 flex flex-col">
        <p className="font-semibold">{description}</p>
        <div className="text-xs">
          Starting from: <span className="text-sm font-semibold">${price}</span>
        </div>
        <div className="flex  items-center  border-black mt-auto">
          <div className="flex justify-evenly items-center gap-4">
            <div className="text-pri text-lg bg-[#F0F1F8] rounded p-[2.5px]">
              <LuMinus />
            </div>

            <div className="font-semibold text-xs">{quantity}</div>

            <div className="text-white text-lg bg-orange-500 rounded p-[2.5px]">
              <LuPlus />
            </div>
          </div>
          <span className="text-orange-500 float-right ml-auto text-lg">
            <LuTrash2 />
          </span>
        </div>
      </div>
    </div>
  );
};
