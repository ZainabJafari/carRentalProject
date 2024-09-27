"use client";
import React, { useRef } from "react";
import PickupDropoffForm from "./PickupDropoffForm";


interface HeroProps {}

interface CardsItemDataProps {
  cardTitle: string;
  cardContent: string;
}

const cardsItemThreeData: CardsItemDataProps[] = [
  {
    cardTitle: "Best deals on cars",
    cardContent: "See deals from rental companies in 70,000+ locations.",
  },
  {
    cardTitle: "Price transparency",
    cardContent: "See the total cost up front so there are no surprises.",
  },
  {
    cardTitle: "Book with flexibility",
    cardContent: "Find cars with free cancellation and enhanced cleaning.",
  },
];

const Hero: React.FC<HeroProps> = () => {
  const pickupDropoffFormRef = useRef<HTMLDivElement>(null);

  /*   const handleScrollToForm = () => {
    pickupDropoffFormRef.current?.scrollIntoView({ behavior: "smooth" });
  }; */

  return (
    <div className="relative h-2/3 bg-gray-900">
      <img
        src="https://fzcrental.com/cdn/shop/products/merca-1.jpg?v=1678359545"
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 pt-5 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:5xl font-bold mb-4">
          Find Your Perfect Rental Car Today
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Discover our range of vehicles and enjoy hassle-free rentals.
        </p>
        <div className="w-full max-w-none mx-auto px-10">
          <PickupDropoffForm />
        </div>

        {/*       <button
        className="mt-6 p-3 bg-[#17b794] rounded-md w-1/3 text-lg text-white"
        onClick={handleScrollToForm}
      >
        Boka nu
      </button> */}
      </div>
    </div>
  );
};

export default Hero;
