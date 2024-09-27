"use client"

import React, { useState } from "react";
import CustomFilter from "./CustomFilter";
import { useCarContext } from "@/context/carContext";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [transmission, setTransmission] = useState<string>("");
  const { filterCars, noResults } = useCarContext();

  const handleFilter = () => {
    filterCars(search, year, transmission);
  };

  const handleReset = () => {
    setSearch("");
    setYear("");
    setTransmission("");
    filterCars("", "", "");
  };

  return (
    <div className="p-6 bg-white w-full md:w-3/4 lg:w-1/2">
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by brand"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <CustomFilter
        label="Year"
        options={["2023", "2022", "2021", "2020", "2019", "2018"]}
        selected={year}
        setSelected={setYear}
      />
      <CustomFilter
        label="Transmission"
        options={["Automatic", "Manual"]}
        selected={transmission}
        setSelected={setTransmission}
      />
    </div>
  
    <div className="flex flex-col md:flex-row justify-end gap-2 p-1">
      <button
        onClick={handleReset}
        className="px-6 py-2 bg-white border text-black rounded-lg hover:bg-blue-500 transition-colors duration-200 w-full md:w-auto"
      >
        Reset
      </button>
      <button
        onClick={handleFilter}
        className="px-10 py-2 w-full md:w-auto rounded-md overflow-hidden group bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
        <span className="relative font-semibold">Apply Filters</span>
      </button>
    </div>
  
    {noResults && (
      <div className="mt-4 text-center text-red-500">
        No cars match the search criteria.
      </div>
    )}
  </div>
  
  );
};

export default SearchBar;
