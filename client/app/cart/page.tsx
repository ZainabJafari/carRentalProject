"use client";
import { useCart } from "@/context/cartContext";
import { useCarContext } from "@/context/carContext";
import Link from "next/link";

const Cart = () => {
  const { cartItems, getItemQuantity, removeFromCart } = useCart();
  const { cars } = useCarContext();

  return (
    <div className="mx-auto mt-10 px-4 h-screen overflow-auto">

      {cars.map((car) => {
        const quantity = getItemQuantity(car.id);
        if (cartItems.some((item) => item.id === car.id && quantity > 0)) {
          return (
            <div
              className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col lg:flex-row gap-4"
              key={car.id}
            >
              {/* Car Image */}
              <div className="flex-shrink-0 w-full lg:w-1/3">
                <img
                  src={car.car_img}
                  alt={car.model}
                  className="object-cover w-full h-48 rounded-lg"
                />
              </div>

              {/* Car Details */}
              <div className="flex flex-col justify-between w-full lg:w-2/3">
                <div>
                  <h3 className="text-xl font-bold">{car.model}</h3>
                  <p className="text-gray-500 mb-4">{car.make}</p>
                  <p>{car.cylinders}</p>
                  <p>{car.make}</p>
                </div>

                {/* Remove Button */}
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
  );
};

export default Cart;
