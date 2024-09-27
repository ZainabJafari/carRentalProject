'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import { useBookingContext } from '@/context/dateContext';

const locations = ["Stockholm city, Sweden", "Stockholm Arlanda, Sweden","Stockholm Skavsta Airport, Sweden", "Solna, Sweden", "Uppsala, Sweden", "Malmö, Sweden", "Norrköping, Sweden", "Falun, Sweden", "Göteborg, Sweden", "Sollentuna, Sweden"];
const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const PickupDropoffForm = () => {
  const {
    pickupDate,
    setPickupDate,
    pickupLocation,
    setPickupLocation,
    pickupTime,
    setPickupTime,
    dropoffDate,
    setDropoffDate,
    dropoffLocation,
    setDropoffLocation,
    dropoffTime,
    setDropoffTime,
    submitBooking,
  } = useBookingContext();

  const router = useRouter();
  const [showModal, setShowModal] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(''); 

  // Separate states for pickup and dropoff searches
  const [pickupSearchTerm, setPickupSearchTerm] = useState('');
  const [pickupFilteredCities, setPickupFilteredCities] = useState<string[]>([]);
  const [dropoffSearchTerm, setDropoffSearchTerm] = useState('');
  const [dropoffFilteredCities, setDropoffFilteredCities] = useState<string[]>([]);

  // Handling the search for pickup location
  const handlePickupSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setPickupSearchTerm(input);

    if (input) {
      const filtered = locations.filter(city =>
        city.toLowerCase().startsWith(input.toLowerCase())
      );
      setPickupFilteredCities(filtered);
    } else {
      setPickupFilteredCities([]);
    }
  };

  const handlePickupSelect = (city: string) => {
    setPickupLocation(city);
    setPickupSearchTerm(city); 
    setPickupFilteredCities([]); 
  };

  // Handling the search for dropoff location
  const handleDropoffSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setDropoffSearchTerm(input);

    if (input) {
      const filtered = locations.filter(city =>
        city.toLowerCase().startsWith(input.toLowerCase())
      );
      setDropoffFilteredCities(filtered);
    } else {
      setDropoffFilteredCities([]);
    }
  };

  const handleDropoffSelect = (city: string) => {
    setDropoffLocation(city);
    setDropoffSearchTerm(city); 
    setDropoffFilteredCities([]); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!pickupLocation || !pickupDate || !pickupTime) {
      setErrorMessage("Please pick a pick-up location.");
      setShowModal(true); 
      return;
    }

    if (!dropoffLocation || !dropoffDate || !dropoffTime) {
      setErrorMessage("Ange en plats för avlämning, datum och tid.");
      setShowModal(true); 
      return;
    }

    submitBooking();
    router.push('/cars'); 
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center p-10">
  <form onSubmit={handleSubmit} className="w-full max-w-3xl p-8 bg-white rounded-xl shadow-lg border-4 border-blue-600 space-y-6">
    {/* Pickup Section */}
    <div className="flex flex-col md:flex-row gap-6">
      <div className="relative w-full md:w-1/2">
        <label className="block mb-2 text-black font-bold">Pick-up location</label>
        <input
          type="text"
          value={pickupSearchTerm}
          onChange={handlePickupSearch}
          className={`w-full px-4 py-3 border text-black ${pickupLocation ? 'border' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Enter a pick-up city"
        />
        {pickupFilteredCities.length > 0 && (
          <ul className="absolute bg-slate-100 text-black border border-gray-300 rounded-md w-full mt-1 z-10">
            {pickupFilteredCities.map((city, index) => (
           <div className="flex items-center justify-between space-x-4 p-4 bg-gray-50 rounded-lg">
           {/* SVG Icon */}
           <div className="flex items-center justify-center">
             <svg 
               fill="#000000" 
               version="1.1" 
               id="Capa_1" 
               xmlns="http://www.w3.org/2000/svg" 
               xmlnsXlink="http://www.w3.org/1999/xlink" 
               width="24px" 
               height="24px" 
               viewBox="0 0 395.71 395.71" 
               xmlSpace="preserve"
               className="w-6 h-6"
             >
               <g>
                 <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
               </g>
             </svg>
           </div>
         
           {/* List Item */}
           <li
             key={index}
             onClick={() => handlePickupSelect(city)}
             className="flex-1 px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-300 rounded-md text-black transition-colors duration-200"
           >
             {city}
           </li>
         </div>
         
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col md:flex-row w-full gap-6">
        <div className="w-full">
          <label className="block mb-2 text-black font-bold">Pick-up Date</label>
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            className="w-full p-3 border text-black border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="block mb-2 font-bold text-black">Pick-up Time</label>
          <select
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="w-full p-3 border border-gray-300 text-black rounded-md"
          >
            <option value="">Time</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>

    {/* Dropoff Section */}
    <div className="flex flex-col md:flex-row gap-6">
      <div className="relative w-full md:w-1/2">
        <label className="block mb-2 text-black font-bold">Drop-off location</label>
        <input
          type="text"
          value={dropoffSearchTerm}
          onChange={handleDropoffSearch}
          className={`w-full px-4 py-3 border text-black ${dropoffLocation ? 'border' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Enter a drop-off city"
        />
        {dropoffFilteredCities.length > 0 && (
          <ul className="absolute bg-slate-100 text-black border border-gray-300 rounded-md w-full mt-1 z-10">
            {dropoffFilteredCities.map((city, index) => (
              <div className="flex items-center justify-between space-x-4 p-4 bg-gray-50 rounded-lg">
  {/* SVG Icon */}
  <div className="flex items-center justify-center">
    <svg 
      fill="#000000" 
      version="1.1" 
      id="Capa_1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      width="24px" 
      height="24px" 
      viewBox="0 0 395.71 395.71" 
      xmlSpace="preserve"
      className="w-6 h-6"
    >
      <g>
        <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
          c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
          C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
          c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
      </g>
    </svg>
  </div>

  {/* List Item */}
  <li
    key={index}
    onClick={() => handleDropoffSelect(city)}
    className="flex-1 px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-300 rounded-md text-black transition-colors duration-200"
  >
    {city}
  </li>
</div>


            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col md:flex-row w-full gap-6">
        <div className="w-full">
          <label className="block mb-2 font-bold text-black">Drop-off Date</label>
          <DatePicker
            selected={dropoffDate}
            onChange={(date) => setDropoffDate(date)}
            className="w-full p-3 text-black border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="block mb-2 font-bold text-black">Drop-off Time</label>
          <select
            value={dropoffTime}
            onChange={(e) => setDropoffTime(e.target.value)}
            className="w-full p-3 border border-gray-300 text-black rounded-md"
          >
            <option value="">Time</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>

    {/* Submit Button */}
    <div className="flex justify-center">
      <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition">
        Search
      </button>
    </div>
  </form>

  {/* Modal for error messages */}
  {showModal && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="mb-4 text-black">{errorMessage}</p>
        <button onClick={closeModal} className="px-10 py-2 rounded-md overflow-hidden group bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300">
          <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
          <span className="relative font-semibold">Dismiss</span>
        </button>
      </div>
    </div>
  )}
</div>

  );
};

export default PickupDropoffForm;
