import React from 'react';

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

const CardHome = () => {
  return (
    <div className="flex justify-center flex-col items-center p-4">
      {/* Title */}
      <h1 className="text-center text-2xl sm:text-3xl p-6 sm:p-12">
        Browse our car options and experience hassle-free rentals
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsItemThreeData.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-80 md:w-96 h-64 duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-6 flex flex-col justify-evenly"
          >
            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
            <div className="z-10 flex flex-col justify-evenly w-full h-full">
              <span className="text-xl sm:text-2xl font-bold">
                {card.cardTitle}
              </span>
              <p className="text-sm sm:text-base">{card.cardContent}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Subtitle */}
      <h1 className="text-xl sm:text-2xl p-6 sm:p-10 text-center">
        Access our extensive fleet and enjoy a straightforward rental process.
      </h1>
    </div>
  );
};

export default CardHome;
