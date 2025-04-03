"use client";

import type React from "react";

import { useState } from "react";
import ResponsiveSidebar from "@/components/responsive-sidebar";
import AccountSettings from "./AccountSettings";

export default function ResponsiveSettingsPage() {
  const [activeTab, setActiveTab] = useState("Account");

  const getSettingsComponent = (activeState: string) => {
    if (activeState === "Account") {
      return <AccountSettings />;
    }
  };

  return (
    <>
      {/* <div className="flex flex-col min-h-screen border border-black"> */}
      {/* Main Content */}
      <div className="flex-1 bg-white rounded-3xl p-4 ">
        <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
          Settings
        </h1>

        <div className="border border-black flex flex-col justify-center p-2">
          {/* Tabs - Scrollable on mobile */}
          <div className=" mb-6 overflow-x-auto self-center">
            <div className="flex space-x-2 sm:space-x-4 md:space-x-8 pb-2">
              {["Account", "Preference", "Security", "Billing"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 px-1 whitespace-nowrap ${
                    activeTab === tab
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Account Settings Form */}
          {getSettingsComponent(activeTab)}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
