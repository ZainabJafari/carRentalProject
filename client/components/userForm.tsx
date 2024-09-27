/* 'use client';

import React, { useState } from 'react';
import { useUserContext } from '@/context/userContext';
import Modal from '@/components/Modal';
import { useRouter } from 'next/router'; 

const UserForm: React.FC = () => {
  const { name, email, phone, payment_method, setName, setEmail, setPhone, setPaymentMethod, submitUser } = useUserContext();
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showInsuranceModal, setShowInsuranceModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitUser();
    window.location.href = '/confirm';
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="p-4 md:p-6 bg-gray-50 rounded-xl shadow-md max-w-lg w-full mx-auto"
    >
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-center md:text-left">
        Driver details
      </h2>
  
      <div className="pb-4">
        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          required
        />
      </div>
  
      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          required
        />
      </div>
  
      <div className="mb-4">
        <label className="block mb-2 font-medium">Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          required
        />
      </div>
  
      <div className="mb-4">
        <label className="block mb-2 font-medium">Payment Method</label>
        <select
          value={payment_method}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          required
        >
          <option value="">Select payment method</option>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="swish">Swish</option>
        </select>
      </div>
  
      <div className="mb-4">
        <label className="block mb-2 font-bold">Terms and Conditions</label>
        <p
          className="text-blue-600 cursor-pointer underline hover:text-blue-800 transition-colors"
          onClick={() => setShowTermsModal(true)}
        >
          Read More
        </p>
      </div>
  
      <div className="mb-4">
        <label className="block mb-2 font-bold">Insurance Offer</label>
        <p
          className="text-blue-600 cursor-pointer underline hover:text-blue-800 transition-colors"
          onClick={() => setShowInsuranceModal(true)}
        >
          Read More
        </p>
      </div>
  
      <div className="text-center pt-6">
        <button
          type="submit"
          className="mt-4 px-6 py-3 w-full sm:w-auto bg-gradient-to-r from-gray-700 to-black text-white rounded-md hover:bg-gradient-to-r hover:from-gray-600 hover:to-black transition duration-300 ease-out relative overflow-hidden"
        >
          <span className="absolute right-0 w-8 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
          <span className="relative font-semibold">Submit</span>
        </button>
      </div>
    </form>
  
    <Modal
      show={showTermsModal}
      onClose={() => setShowTermsModal(false)}
      title="Terms and Conditions"
    >
      <p>Here are the terms and conditions of the car rental service...</p>
    </Modal>
  
    <Modal
      show={showInsuranceModal}
      onClose={() => setShowInsuranceModal(false)}
      title="Insurance Offer"
    >
      <p>Here are the details of the insurance offer...</p>
    </Modal>
  </>
  
  );
};

export default UserForm;
 */