"use client";
import { BACKEND_URL } from "@/utils/constants";
import { BrandKitTypes } from "./ViewBrandKits";
import Image from "next/image";
import { KebabMenu } from "../ui/kebab-menu";
import { RenameModal } from "./RenameModal";
import { useState } from "react";

export const BrandKitCard = ({
  brandKit,
  onRename,
  onEdit,
}: {
  brandKit: BrandKitTypes;
  onRename: (brandKit: BrandKitTypes) => void;
  onEdit: (brandKit: BrandKitTypes) => void;
}) => {
  // const [showRenameModal, setShowRenameModal] = useState(false);
  const formattedDate = new Date(brandKit.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  const handleEdit = (brandKit: BrandKitTypes) => {
    console.log("Edit brand kit:", brandKit.id);

  };

  const handleDelete = (brandKit: BrandKitTypes) => {
    console.log("Delete brand kit:", brandKit.id);
  };

  const handleRenameSubmit = async (newName: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");

      const accessToken = JSON.parse(token).accessToken;
      const response = await fetch(
        `${BACKEND_URL}/api/brand-kit/${brandKit.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ name: newName }),
        }
      );

      if (!response.ok) throw new Error("Failed to rename brand kit");

      console.log("Successfully renamed to:", newName);
    } catch (error) {
      console.error("Error renaming brand kit:", error);
      throw error;
    }
  };
  return (
    <div className=" bg-transparent rounded-lg ">
      {/* <div className="flex items-center justify-center cursor-pointer bg-[#F0F1F8] rounded-lg"> */}
      <div className="aspect-square bg-[#F5F5F5] flex items-center justify-center p-4 rounded-xl">
        <Image
          src="/dashboard/cap.png"
          width={200}
          height={200}
          alt={brandKit.name}
          className="object-contain w-full h-full opacity-70"
        />
      </div>
      <div className="p-2">
        <h3 className="font-medium text-lg truncate ">{brandKit.name}</h3>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
          <span>Created: {formattedDate}</span>
          <div className="">
            <KebabMenu
              brandKit={brandKit}
              onEdit={() => onEdit(brandKit)}
              //   onRename={handleRename}
              onRename={() => onRename(brandKit)}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      {/* <RenameModal
        isOpen={showRenameModal}
        currentName={brandKit.name}
        onClose={() => setShowRenameModal(false)}
        onRename={handleRenameSubmit}
      /> */}
    </div>
  );
};
