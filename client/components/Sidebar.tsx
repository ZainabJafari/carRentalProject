import { useCarContext } from '@/context/carContext';
import { useCart } from '@/context/cartContext';
import { useBookingContext } from '@/context/dateContext';
import Link from 'next/link';
import React from 'react';

const Sidebar = ({ isOpen, onClose }: any) => {
  const { cartItems, getItemQuantity, removeFromCart } = useCart();
  const { cars } = useCarContext();

  const {
    pickupDate,
    pickupLocation,
    pickupTime,
    dropoffDate,
    dropoffLocation,
    dropoffTime,
  } = useBookingContext();

  const formatDate = (date: Date | null) => {
    return date ? date.toLocaleDateString() : 'Not selected';
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Check if the clicked target is the overlay and not the sidebar itself
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={handleOverlayClick} 
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#0b0d2c] border border-blue-950 rounded-sm text-white transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full sm:w-1/2 lg:w-1/3 xl:w-1/3`}
      >
        <button
          className="absolute top-4 left-4 p-2 text-gray-300 hover:text-white focus:outline-none text-4xl"
          onClick={onClose}
        >
          ×
        </button>

        <div className="mx-auto mt-10 px-4 h-screen overflow-auto">
          <h2 className="text-2xl sm:text-3xl font-bold py-8">Saved cars</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-black pb-2">
                Pickup
              </h3>
              <p className="text-gray-700">{formatDate(pickupDate)}</p>
              <div className="flex flex-row space-x-2 mt-1">
                <span className="text-gray-900 font-bold">{pickupLocation}</span>
                <span className="text-gray-700">{pickupTime}</span>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-black pb-2">
                Dropoff
              </h3>
              <p className="text-gray-700">{formatDate(dropoffDate)}</p>
              <div className="flex flex-row space-x-2 mt-1">
                <span className="text-gray-900 font-bold">{dropoffLocation}</span>
                <span className="text-gray-700">{dropoffTime}</span>
              </div>
            </div>
          </div>

          {cars.map((car) => {
            const quantity = getItemQuantity(car.id);
            if (cartItems.some((item) => item.id === car.id && quantity > 0)) {
              return (
                <div
                  className="bg-white rounded-lg shadow-md p-4 sm:p-6 my-4 flex flex-col lg:flex-row gap-4"
                  key={car.id}
                >
                  <div className="flex-shrink-0 w-full lg:w-1/3">
                    <img
                      src={car.car_img}
                      alt={car.model}
                      className="object-cover w-full h-48 rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col justify-between w-full lg:w-2/3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-black">
                        {car.model}
                      </h3>
                      <p className="text-black">{car.make}</p>
                      <p className="text-black mb-4">{car.class}</p>
                      <p className="text-black">{car.cylinders}</p>
                    </div>

                    <div className="text-right space-x-3">
                      <button
                        className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition duration-300"
                        onClick={() => removeFromCart(car.id)}
                      >
                        Remove
                      </button>
                      <Link href={`/detail/${car.id}`}>
                        <button className="px-8 py-2 overflow-hidden group bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300">
                          <span className="absolute right-0 w-8 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                          <span className="relative font-semibold">View Deal</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
