"use client";
import React, { useState } from "react";

const SecuritySettings = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("settingsData", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" md:min-w-max w-auto space-y-2 flex flex-col items-center"
    >
      <div className=" w-full md:w-[50%] transition-all">
        <label
          htmlFor="currentPassword"
          className="block text-sm font-medium mb-1"
        >
          Current Password
        </label>
        <input
          type="text"
          id="currentPassword"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          placeholder="Placeholder text"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 box-border"
        />
      </div>

      <div className=" w-full md:w-[50%] transition-all">
        <label htmlFor="newPassword" className="block text-sm font-medium mb-1">
          New password
        </label>
        <input
          type="text"
          id="newPassword"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="Placeholder text"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 box-border"
        />
      </div>

      <div className=" w-full md:w-[50%] transition-all">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium mb-1"
        >
          Confirm password
        </label>
        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Placeholder text"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 box-border"
        />
      </div>

      <div className="flex items-center justify-between sm:justify-end w-full md:w-[50%] space-x-4 py-3">
        <button
          type="button"
          className="max-[480px]:w-full w-[35%]  px-4 md:px-6 py-2 border border-gray-300 rounded-xl text-gray-700 text-center"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="max-[480px]:w-full w-[35%]  px-4 md:px-6 py-2 bg-acc text-white rounded-xl hover:bg-orange-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default SecuritySettings;
