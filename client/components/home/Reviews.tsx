import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className="max-w-xs overflow-hidden m-1 bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"></div>
        <div className="p-6 relative z-10">
          <p className="text-xl font-semibold text-gray-800">
            ClassNameic Blue Jeans
          </p>
          <p className="mt-2 text-gray-600">
            Our classNameic blue jeans are a timeless addition to your wardrobe.
            Crafted from premium denim, they offer both style and comfort.
            Perfect for any casual occasion.
          </p>
          <div className="flex items-center mt-4 text-gray-600">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current text-yellow-500"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
            <span className="ml-2">4.8 (24 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
