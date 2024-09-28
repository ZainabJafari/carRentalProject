"use client";

import { CarProps } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCarContext } from "@/context/carContext";
import { useBookingContext } from "@/context/dateContext";
import Login from "../../../components/Login";

const page = ({ params }: { params: { id: string } }) => {
  const { fetchCarById } = useCarContext();
  const {
    pickupDate,
    pickupLocation,
    pickupTime,
    dropoffDate,
    dropoffLocation,
    dropoffTime,
  } = useBookingContext();
  const [car, setCar] = useState<CarProps | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchCarById(params.id as string).then((carData) => {
        if (carData) {
          setCar(carData);
        } else {
          console.error("Car not found");
        }
      });
    }
  }, [params.id, fetchCarById]);

  if (!car) {
    return <div>Loading...</div>;
  }

  const formatDate = (date: Date | null) => {
    return date ? date.toLocaleDateString() : "Not selected";
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left sm:pl-10">
        Confirm your booking
      </h1>

      <div className="py-6 px-4 sm:px-10">
        {/* Review Section */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Review</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-lg shadow-lg p-6">
          {/* Car Image */}
          <div className="w-full max-w-sm mx-auto lg:mx-0">
            <Image
              src={car.car_img}
              alt={`${car.make} ${car.model}`}
              width={300}
              height={150}
              className="rounded-lg"
            />
          </div>

          {/* Car Specifications */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold">Make</h3>
              <p className="text-gray-700">{car.make}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Model</h3>
              <p className="text-gray-700">{car.model}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Year</h3>
              <p className="text-gray-700">{car.year}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Transmission</h3>
              <p className="text-gray-700">{car.transmission}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Fuel Type</h3>
              <p className="text-gray-700">{car.fuel_type}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Displacement</h3>
              <p className="text-gray-700">{car.displacement}</p>
            </div>
          </div>
        </div>

        {/* Booking Details Section */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Booking Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
              {/* Pickup Information */}
              <div>
                <h3 className="text-lg font-semibold">Pickup</h3>
                <p className="text-gray-700">{formatDate(pickupDate)}</p>
                <div className="flex flex-row space-x-2 mt-1">
                  <span className="text-gray-700">
                    {pickupLocation || "Not selected"}
                  </span>
                  <span className="text-gray-700">
                    {pickupTime || "Not selected"}
                  </span>
                </div>
              </div>

              {/* Dropoff Information */}
              <div>
                <h3 className="text-lg font-semibold">Dropoff</h3>
                <p className="text-gray-700">{formatDate(dropoffDate)}</p>
                <div className="flex flex-row space-x-2 mt-1">
                  <span className="text-gray-700">
                    {dropoffLocation || "Not selected"}
                  </span>
                  <span className="text-gray-700">
                    {dropoffTime || "Not selected"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
