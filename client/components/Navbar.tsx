"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cartContext";
import { useState } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Login from "./Login";
const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const { cartQuantity } = useCart();

  return (
    <header className="w-full sticky top-0 z-20 bg-blue-600 shadow-md">
    {/* Sidebar */}
    <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
  
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
      <div>
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="logo"
            width={70}
            height={14}
            className="h-14 w-14 lg:h-20 lg:w-20 object-contain rounded-xl"
          />
        </Link>
      </div>
  
      <div className="flex space-x-6">
        <button
          className="p-4 text-gray-700 focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          {cartQuantity > 0 && (
            <span className="text-white">{cartQuantity}</span>
          )}
          <svg
            fill="#fff"
            height="40px"
            width="40px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 471.701 471.701"
            className="h-6 w-6 lg:h-10 lg:w-10" // Use responsive classes for size
          >
            <g>
              <path
                d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                C444.801,187.101,434.001,213.101,414.401,232.701z"
              />
            </g>
          </svg>
        </button>
        <div className="flex items-center justify-center space-x-3 p-2 rounded-lg md:border border-blue-300 hover:bg-gray-700 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" // Adjusted size for smaller screens
            height="24" // Adjusted size for smaller screens
            fill="#fff"
            className="bi bi-person-add"
            viewBox="0 0 16 16"
            onClick={() => setModalOpen(true)}

          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"></path>
          </svg>
  
          <button
            className="text-white text-xl sm:text-sm lg:text-lg font-semibold  hover:text-gray-300 transition-colors duration-300 flex items-center" // Use responsive classes for font size
            onClick={() => setModalOpen(true)}
          >
            <span className="hidden sm:inline">Login</span> {/* Hide text on small screens */}
         
          </button>
  
          <Modal
            show={isModalOpen}
            onClose={() => setModalOpen(false)}
            title=""
          >
            <p className="text-center text-xl font-bold text-gray-900">
              Log in or create an account
            </p>
            <Login />
          </Modal>
        </div>
      </div>
    </nav>
  </header>
  
  );
};

export default Navbar;
