import React from "react";

export const QuickActionCards = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12">
        <img className="col-span-6" src="/dashboard/bottles.png" alt="" />
        <img src="/dashboard/kit.png" alt="" />
        <img src="/dashboard/menu.png" alt="" />
        <img src="/dashboard/bag.png" alt="" />
      </div>
      <Card title={"Brand your event"} imageUrl="/dashboard/event.png" />
      <Card title={"Access brandd kit"} imageUrl="/dashboard/colors.png" />
    </>
  );
};

const Card = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  return (
    <div className="p-4 bg-sec col-span-4">
      <h3>{title}</h3>
      <img src={imageUrl} alt="" />
    </div>
  );
};
