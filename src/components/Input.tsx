"use client";

import { defaultOptions } from "@/mock/data";
import { useState } from "react";

const CustomInput = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(defaultOptions[0]);
  const [showOptions, setShowOptions] = useState(defaultOptions);

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = () => {
    setShowDropdown(false);
  };

  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.trim();
    setInputValue(text);

    if (text === "") {
      setShowOptions(defaultOptions);
    } else {
      const filteredOptions = defaultOptions.filter((option) =>
        option.label.toLowerCase().includes(text.toLowerCase()),
      );
      setShowOptions(filteredOptions);
    }
  };

  const handleOptionClick = (option: (typeof defaultOptions)[0]) => () => {
    setInputValue(option.value);
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="w-full max-w-xs">
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
          onChange={handleInputTextChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:shadow-lg transition-all"
          placeholder="Enter your text here"
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {showDropdown && (
          <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {showOptions.length ? (
              showOptions.map((option) => (
                <div
                  key={option.id}
                  className="px-6 py-3 cursor-pointer hover:bg-gray-100 text-sm"
                  onClick={handleOptionClick(option)}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="px-6 py-3 text-sm text-center">
                No option found
              </div>
            )}
          </div>
        )}
        <p>
          Selected Option:{" "}
          <span className="font-bold">{selectedOption.value}</span>
        </p>
      </div>
    </div>
  );
};

export default CustomInput;
