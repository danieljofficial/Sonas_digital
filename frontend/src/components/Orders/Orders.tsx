"use client";
import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Header } from "./Header";
import { Grid } from "./Grid";

export const Orders = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  return (
    <div className="bg-white rounded-lg shadow-md p-3 max-md:mt-4">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Grid />
    </div>
  );
};
