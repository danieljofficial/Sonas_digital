"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Header from "./Header";
import Image from "next/image";
import { KebabMenu } from "../ui/kebab-menu";
import { useState } from "react";
import { RenameModal } from "./RenameModal";
import { BACKEND_URL } from "@/utils/constants";
import { BrandKitCard } from "./BrandKitCard";
import { EditBrandKitModal } from "./EditBrandKitModal";
import { stripEmptyProperties } from "@/utils/utils";

export interface BrandKitTypes {
  id: string;
  userId: string;
  name: string;
  logoUrl: string;
  colours: string[];
  fonts: string[];
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

const SUCCESS_STATUS_CODE = 200;

export const ViewBrandKits = () => {
  const queryClient = useQueryClient();
  const [editingKit, setEditingKit] = useState<BrandKitTypes | null>(null);
  const [renamingKit, setRenamingKit] = useState<BrandKitTypes | null>(null);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["brand-kit"],
    queryFn: fetchBrandKits,
  });

  async function fetchBrandKits() {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const accessToken = JSON.parse(token).accessToken;
    const url = `${BACKEND_URL}/api/brand-kit/`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.json();
  }

  const editMutation = useMutation({
    mutationFn: async (updatedData: {
      id: string;
      name: string;
      logo: File | string | null;
      colors: string[];
      fonts: string[];
    }) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token");

      const parsedData = stripEmptyProperties(updatedData);

      const formData = new FormData();
      formData.append("name", updatedData.name);
      if (updatedData.logo instanceof File) {
        formData.append("logo", updatedData.logo);
      } else if (updatedData.logo === null) {
        formData.append("removeLogo", "true");
      }
      formData.append("colours", JSON.stringify(updatedData.colors));
      formData.append("fonts", JSON.stringify(updatedData.fonts));

      const accessToken = JSON.parse(token).accessToken;
      const response = await fetch(
        `${BACKEND_URL}/api/brand-kit/${updatedData.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Failed to update");
      console.log(response.json());
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brand-kit"] });
      setEditingKit(null);
    },
  });

  const handleEdit = (brandKit: BrandKitTypes) => {
    setEditingKit(brandKit);
  };

  const renameMutation = useMutation({
    mutationFn: async ({ id, newName }: { id: string; newName: string }) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token");

      const accessToken = JSON.parse(token).accessToken;
      const response = await fetch(`${BACKEND_URL}/api/brand-kit/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ name: newName }),
      });

      if (!response.ok) throw new Error("Failed to rename");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brand-kit"] });
      setRenamingKit(null);
    },
  });

  const handleRename = (brandKit: BrandKitTypes) => {
    setRenamingKit(brandKit);
  };

  return (
    <div className=" bg-white rounded-lg shadow-md p-3 max-md:mt-4 overflow-y-auto h-screen">
      <Header />
      {isLoading && (
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
        </div>
      )}
      <div className="">
        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((brandKit: BrandKitTypes, index: number) => (
              <BrandKitCard
                brandKit={brandKit}
                key={index}
                onRename={handleRename}
                onEdit={handleEdit}
              />
            ))}
          </div>
        )}
      </div>
      {renamingKit && (
        <RenameModal
          isOpen={!!renamingKit}
          currentName={renamingKit.name}
          onClose={() => setRenamingKit(null)}
          onRename={async (newName) =>
            renameMutation.mutate({
              id: renamingKit.id,
              newName,
            })
          }
          isLoading={renameMutation.isPending}
        />
      )}

      {editingKit && (
        <EditBrandKitModal
          isOpen={!!editingKit}
          brandKit={editingKit}
          onClose={() => setEditingKit(null)}
          onSave={async (updatedData) => {
            await editMutation.mutateAsync({
              id: editingKit.id,
              ...updatedData,
            });
          }}
        />
      )}
    </div>
  );
};
