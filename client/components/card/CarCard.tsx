"use client";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import CardDetails from "./CardDetails";
import { useCart } from "@/context/cartContext";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const { increaseCartQuantity } = useCart();

  return (
    <div className="car-card-container flex flex-col items-center gap-6">
      <div className="car-card group relative flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 w-full max-w-5xl">
        {/* Left Section: Car Image and Logo */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center relative">
          <div className="relative w-full h-40 my-3">
            <Image
              src={car.car_img}
              alt="car model"
              fill
              priority
              className=" object-cover h-2/3 w-2/3 lg:w-full lg:h-full"
            />
          </div>
   
        </div>

        {/* Middle Section: Car Details */}
        <div className="flex flex-col flex-grow px-4 space-y-2 w-full md:w-2/3">
          <h2 className="text-xl font-bold">
            {car.class}
          </h2>
          <p className="text-xl text-gray-600">or similar Standard SUV</p>

          <div className="flex items-center space-x-4 text-xl text-gray-500">
            <div className="flex items-center space-x-3">
              <Image
                src="/wheel.svg"
                alt="street wheel"
                width={20}
                height={20}
              />
{/*               <span>{car.drive.toUpperCase()}</span>
 */}            </div>
            <div className="flex items-center space-x-1">
              <Image src="/tire.svg" alt="tire icon" width={20} height={20} />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image
                src="/gas.svg"
                alt="gas mileage icon"
                width={20}
                height={30}
              />
              <span>{car.city_mpg} MPG</span>
            </div>
            <span>A/C</span>
          </div>
          <button
            onClick={() => increaseCartQuantity(car.id)}
            title="Save"
            className="absolute top-4 left-4 flex items-center fill-grey bg-white border hover:bg-blue-300 active:border active:border-lime-400 rounded-md duration-100 p-2"
          >
            <svg
              viewBox="0 -0.5 25 25"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span className="text-sm text-black font-bold pr-1">Save</span>
          </button>
        </div>

        {/* Right Section: Price and View Deal */}
        <div className="flex-shrink-0 w-full md:w-1/4 flex flex-col items-end justify-center px-4">
          <p className="text-lg font-extrabold">${carRent}</p>
          <p className="text-xs text-gray-500">/day</p>
          <button
          onClick={() => setIsOpen(true)}
          className="mt-10 px-8 py-2 overflow-hidden group bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
          <span className="relative font-semibold">View Deal</span>
        </button>
        </div>

        <CardDetails
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          car={car}
        />
      </div>
    </div>
  );
};

export default CarCard;
