import Image from "next/image";
import React from "react";

export const Cart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 max-md:mt-4">
      <h1 className="text-3xl font-semibold mb-6 ml-8 md:ml-0">Cart</h1>
      <div className="border border-black">
        <CartItem imgUrl="ht" description="bottle" price={9.1} />
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
  return (
    <div className="border flex ">
      <div className="p-5">
        <Image
          src={"/dashboard/cap.png"}
          alt="cartItem"
          className="w-10 h-10"
          width={1}
          height={2}
        />
      </div>
      <div>
        <p>{description}</p>
        <div>Starting from: ${price}</div>
        <div className="flex justify-between">
          <div className="flex justify-between"></div>
          <span></span>
        </div>
      </div>
    </div>
  );
};
