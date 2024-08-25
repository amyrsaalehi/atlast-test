"use client";

import { useState } from "react";

const CustomInput = () => {
  const [inputValue, setInputValue] = useState("");
  const defaultOptions = [
    "Education 🎓",
    "Science ⚗️",
    "Art 🎭",
    "Sport ⚽️",
    "Games 🎮",
  ];
  const [selectedOption, setSelectedOption] = useState(defaultOptions[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = () => {
    setShowDropdown(false);
  };

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <label
          htmlFor="textInput"
          className="block text-xl font-bold text-gray-700 mb-2"
        >
          Single Select
        </label>
        <input
          type="text"
          id="textInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:shadow-lg transition-all"
          placeholder="Enter your text here"
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {showDropdown && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {defaultOptions.map((option) => (
              <div
                key={option}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  console.log(option);
                  setSelectedOption(option);
                  setInputValue(option);
                  setShowDropdown(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
