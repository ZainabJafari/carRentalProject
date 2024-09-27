"use client";
import { CarCard, SearchBar } from "@/components";
import { useCarContext } from "@/context/carContext";
import { useBookingContext } from "@/context/dateContext";
import { CarProps } from "@/types";
import React, { useState } from "react";

const page = () => {
  const { filteredCars } = useCarContext();
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedCar, setSelectedCar] = useState<CarProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pickupDate, pickupLocation, dropoffDate, dropoffLocation } =
    useBookingContext();

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const handleShowDetails = (car: CarProps) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const formatDate = (date: Date | null) => {
    return date ? date.toLocaleDateString() : "";
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center p-4 space-y-4 md:space-y-0 md:space-x-8 bg-gray-50 rounded-lg shadow-md">
        {/* Pickup Location and Date */}
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-semibold text-gray-800">
            {pickupLocation}
          </span>
          <span className="text-base md:text-lg text-black mt-1">
            {formatDate(pickupDate)}
          </span>
        </div>

        {/* Drop-off Location and Date */}
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-semibold text-gray-800">
            {dropoffLocation}
          </span>
          <span className="text-base md:text-lg text-black mt-1">
            {formatDate(dropoffDate)}
          </span>
        </div>
      </div>

      <div className="overflow-hidden">
        <h2 className="p-5 pt-4 text-center text-2xl font-bold border-t-2">
          Filter
        </h2>
        <div className="" id="discover">
          <div className="flex justify-center items-center">
            <SearchBar />
          </div>

          {filteredCars.length > 0 ? (
            <section>
              <div className="home__cars-wrapper grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                {filteredCars.slice(0, visibleCount).map((car) => (
                  <div key={car.id} onClick={() => handleShowDetails(car)}>
                    <CarCard car={car} />
                  </div>
                ))}
              </div>

              {visibleCount < filteredCars.length && (
                <div className="text-center mt-4">
                  <button
                    onClick={handleShowMore}
                    className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900"
                  >
                    Show More
                  </button>
                </div>
              )}
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
