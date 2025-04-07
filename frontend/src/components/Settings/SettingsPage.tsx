"use client";

import type React from "react";

import { useState } from "react";
import ResponsiveSidebar from "@/components/responsive-sidebar";
import AccountSettings from "./AccountSettings";
import BillingSettings from "./BillingSettings";
import SecuritySettings from "./SecuritySettings";
import PreferenceSettings from "./PreferenceSettings";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Account");

  const getSettingsComponent = (activeState: string) => {
    if (activeState === "Account") {
      return <AccountSettings />;
    }

    if (activeState === "Billing") return <BillingSettings />;
    if (activeState === "Security") return <SecuritySettings />;
    if (activeState === "Preference") return <PreferenceSettings />;
  };

  return (
    <>
      {/* <div className="flex flex-col min-h-screen border border-black"> */}
      {/* Main Content */}
      <div className="flex-1 bg-white rounded-3xl px-2 py-4 sm:px-4 shadow-md mt-4">
        <h1 className=" text-2xl font-medium mb-4 md:mb-6 ml-0">Settings</h1>

        <div className=" border-black flex flex-col justify-center p-0">
          {/* Tabs - Scrollable on mobile */}
          <div className=" mb-3 overflow-x-auto self-center">
            <div className="flex space-x-1 sm:space-x-4 md:space-x-8 pb-2">
              {["Account", "Preference", "Security", "Billing"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 px-1 whitespace-nowrap font-bold ${
                    activeTab === tab
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-pri"
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
