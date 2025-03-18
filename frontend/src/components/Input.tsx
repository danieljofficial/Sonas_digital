import React from "react";

type InputProps = {
  label: string;
};

const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-pri"
      >
        {label}
      </label>

      <div className="mt-2">
        <input
          type="text"
          className="block w-full rounded-md px-3 py-1.5 text-base border border-sec placeholder:text-gray-400 focus:-outline-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
};

export default Input;
