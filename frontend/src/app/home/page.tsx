import { Dashboard } from "@/components/Home/Dashboard";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Bell } from "lucide-react";
import React from "react";

function DashboardPage() {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-[220px,_1fr]">
      <div className=" w-full bg-white fixed top-0 left-0 h-10 text-center flex items-center transform transition-all duration-300 ease-in-out translate-y-0 md:-translate-y-full">
        <Bell className="w-6 h-6 ml-auto mr-4 text-center" />
      </div>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default DashboardPage;
