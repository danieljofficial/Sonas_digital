import Image from "next/image";
import React, { useState } from "react";

// interface AccountSettingsProps {
//   handleSubmit: (e: React.FormEvent) => void;
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   formData: {
//     fullName: string;
//     companyEmail: string;
//     phoneNumber: string;
//   };
// }

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col justify-center items-center "
    >
      <div className="mb-6 md:mb-8 flex justify-between w-full md:w-[70%] lg:w-1/2 transition-all">
        <div>
          <h2 className="text-base font-medium mb-1">Your photo</h2>
          <p className="text-xs lg:text-sm text-gray-500 mb-4">
            This will be displayed on your profile.
          </p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="rounded-full p-2 md:p-3 border border-sec bg-orange-50  flex items-center justify-center mr-4">
            {/* <img src="/sonaIcon.png" alt="Icon" /> */}
            <Image width={25} height={25} alt="Icon" src={"/sonaIcon.png"} />
          </div>
          <div className="space-x-2">
            <button type="button" className="text-acc text-sm">
              Delete
            </button>
            <button type="button" className="text-blue-700 text-sm">
              Update
            </button>
          </div>
        </div>
      </div>

      {/* <div className="space-y-4 md:space-y-6 w-full md:px-10 lg:px-16 xl:px-32 "> */}
      <div className=" w-full md:w-[70%] lg:w-1/2 transition-all">
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
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 box-border"
        />
      </div>

      <div className=" w-full md:w-[70%] lg:w-1/2 transition-all">
        <label
          htmlFor="companyEmail"
          className="block text-sm font-medium mb-1"
        >
          Company email
        </label>
        <input
          type="email"
          id="companyEmail"
          name="companyEmail"
          value={formData.companyEmail}
          onChange={handleChange}
          placeholder="Placeholder text"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 box-border"
        />
      </div>

      <div className=" w-full md:w-[70%] lg:w-1/2 transition-all">
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
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 box-border"
        />
      </div>

      <div className="flex items-center justify-between sm:justify-end w-full md:w-[50%] space-x-4 py-3">
        <button
          type="button"
          className="max-[480px]:w-full w-[35%] px-4 md:px-6 py-2 border border-gray-300 rounded-xl text-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="max-[480px]:w-full w-[35%] px-4 md:px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600"
        >
          Save
        </button>
      </div>
      {/* </div> */}
    </form>
  );
};

export default AccountSettings;
