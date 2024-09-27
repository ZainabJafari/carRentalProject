"use client"
import React from 'react';

const Confirm = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="font-bold text-4xl text-blue-900 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Your submission has been received successfully. We will get back to you shortly.
        </p>
    
        <button
          onClick={() => window.location.href = '/'}
          className="mt-10 px-8 py-2 overflow-hidden group bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
          <span className="relative font-semibold">Back to Home
          </span>
        </button>
      </div>
    </div>
  );
};

export default Confirm;
