"use client"

import type React from "react"

import { useState } from "react"
import ResponsiveSidebar from "@/components/responsive-sidebar"

export default function ResponsiveSettingsPage() {
  const [activeTab, setActiveTab] = useState("Account")
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    phoneNumber: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      {/* Responsive Sidebar */}
      <ResponsiveSidebar />

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-tl-3xl rounded-bl-3xl p-4 md:p-6 mt-16 md:mt-0">
        <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Settings</h1>

        {/* Tabs - Scrollable on mobile */}
        <div className="border-b mb-6 overflow-x-auto">
          <div className="flex space-x-4 md:space-x-8 min-w-max pb-2">
            {["Account", "Preference", "Security", "Billing"].map((tab) => (
              <button
                key={tab}
                className={`pb-2 px-1 whitespace-nowrap ${
                  activeTab === tab ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Account Settings Form */}
        {activeTab === "Account" && (
          <form onSubmit={handleSubmit}>
            <div className="mb-6 md:mb-8">
              <h2 className="text-base font-medium mb-1">Your photo</h2>
              <p className="text-sm text-gray-500 mb-4">This will be displayed on your profile.</p>

              <div className="flex items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-50 rounded-md flex items-center justify-center mr-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:w-10 md:h-10"
                  >
                    <path d="M20 0L36.6 10V30L20 40L3.4 30V10L20 0Z" fill="#FF5C00" fillOpacity="0.2" />
                    <path d="M20 5L31.6 11.25V23.75L20 30L8.4 23.75V11.25L20 5Z" fill="#FF5C00" />
                  </svg>
                </div>
                <div className="space-x-2">
                  <button type="button" className="text-red-500 text-sm">
                    Delete
                  </button>
                  <button type="button" className="text-orange-500 text-sm">
                    Update
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 max-w-md">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Placeholder text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="companyEmail" className="block text-sm font-medium mb-1">
                  Company email
                </label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  placeholder="Placeholder text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button type="button" className="px-4 md:px-6 py-2 border border-gray-300 rounded text-gray-700">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 md:px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

