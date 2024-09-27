'use client';

import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface BookingDetails {
  pickupDate: string | null; // Storing as string (ISO) in localStorage
  pickupLocation: string;
  pickupTime: string;
  dropoffDate: string | null; // Storing as string (ISO) in localStorage
  dropoffLocation: string;
  dropoffTime: string;
}

interface BookingContextProps extends Omit<BookingDetails, 'pickupDate' | 'dropoffDate'> {
  pickupDate: Date | null;
  dropoffDate: Date | null;
  setPickupDate: (date: Date | null) => void;
  setPickupLocation: (location: string) => void;
  setPickupTime: (time: string) => void;
  setDropoffDate: (date: Date | null) => void;
  setDropoffLocation: (location: string) => void;
  setDropoffTime: (time: string) => void;
  resetBooking: () => void;
  submitBooking: () => void;
}

const BookingContext = createContext<BookingContextProps | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [pickupLocation, setPickupLocation] = useState<string>('');
  const [pickupTime, setPickupTime] = useState<string>('');
  const [dropoffDate, setDropoffDate] = useState<Date | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState<string>('');
  const [dropoffTime, setDropoffTime] = useState<string>('');

  // New state for loading
  const [loading, setLoading] = useState(true);

  // useEffect to load saved booking details from localStorage when the component mounts.
  useEffect(() => {
    const savedData = localStorage.getItem('bookingDetails');
    if (savedData) {
      const parsedData: BookingDetails = JSON.parse(savedData);
      
      setPickupDate(parsedData.pickupDate ? new Date(parsedData.pickupDate) : null);
      setPickupLocation(parsedData.pickupLocation);
      setPickupTime(parsedData.pickupTime);
      setDropoffDate(parsedData.dropoffDate ? new Date(parsedData.dropoffDate) : null);
      setDropoffLocation(parsedData.dropoffLocation);
      setDropoffTime(parsedData.dropoffTime);
    }
    setLoading(false); // Set loading to false after fetching data
  }, []);

  // useEffect to save booking details to localStorage whenever any booking detail changes.
  useEffect(() => {
    if (!loading) {
      const bookingDetails: BookingDetails = {
        pickupDate: pickupDate ? pickupDate.toISOString() : null,
        pickupLocation,
        pickupTime,
        dropoffDate: dropoffDate ? dropoffDate.toISOString() : null,
        dropoffLocation,
        dropoffTime,
      };

      // Save to localStorage
      localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    }
  }, [pickupDate, pickupLocation, pickupTime, dropoffDate, dropoffLocation, dropoffTime, loading]);

  const resetBooking = () => {
    setPickupDate(null);
    setPickupLocation('');
    setPickupTime('');
    setDropoffDate(null);
    setDropoffLocation('');
    setDropoffTime('');
    localStorage.removeItem('bookingDetails'); // Reset the localStorage as well
  };

  const submitBooking = async () => {
    const bookingDetails: BookingDetails = {
      pickupDate: pickupDate ? pickupDate.toISOString() : null,
      pickupLocation,
      pickupTime,
      dropoffDate: dropoffDate ? dropoffDate.toISOString() : null,
      dropoffLocation,
      dropoffTime,
    };

    try {
      const response = await fetch('http://localhost:8800/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Booking successful:', data);
    } catch (error) {
      console.error('There was a problem with the booking:', error);
    }
  };

  // Show a loading message or skeleton while loading data from localStorage
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or skeleton loader
  }

  return (
    <BookingContext.Provider
      value={{
        pickupDate,
        pickupLocation,
        pickupTime,
        dropoffDate,
        dropoffLocation,
        dropoffTime,
        setPickupDate,
        setPickupLocation,
        setPickupTime,
        setDropoffDate,
        setDropoffLocation,
        setDropoffTime,
        resetBooking,
        submitBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to access BookingContext values in other components.
export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
};
