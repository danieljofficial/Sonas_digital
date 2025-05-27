"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Hero = () => {
  return (
    <div className="col-span-12 relative rounded-2xl overflow-hidden p-0 transition-all duration-500 ease-in-out ">
      <div className="md:hidden w-full h-auto aspect-[0.76] ">
        <Image
          src="/dashboard/yellow_wide_mobile.png"
          alt="Mobile Hero"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 767px) 100vw, 0vw"
        />
      </div>

      <div className="hidden md:block w-full h-auto aspect-[4.14] ">
        <Image
          src="/dashboard/yellow_wide_image.png"
          alt="Desktop Hero"
          fill
          className="object-contain"
          priority
          sizes="(min-width: 768px) 100vw, 0vw"
        />
      </div>
    </div>
  );
};
