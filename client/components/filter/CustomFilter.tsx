'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface CustomFilterProps {
  label: string;
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
}

const CustomFilter = ({ label, options, selected, setSelected }: CustomFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option: string) => {
    setSelected(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-2 my-2">
      <div className="relative">
        {/* Button for Dropdown */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 flex justify-between items-center"
        >
          <span>{selected || `Select ${label}`}</span>
          <Image
            src='/up-down.svg'
            width={20}
            height={20}
            alt='Toggle dropdown'
            className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Dropdown Options */}
        {isOpen && (
          <ul className="absolute mt-1 w-full z-40 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelection(option)}
                className={`cursor-pointer select-none relative py-2 pl-10 pr-4 hover:bg-blue-100 ${
                  selected === option ? 'text-blue-600' : 'text-gray-900'
                }`}
              >
                {option}
                {selected === option && (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomFilter;
