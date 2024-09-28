"use client"
import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import axios from 'axios';
import { CarProps } from '@/types';

interface CarContextProps {
  cars: CarProps[];
  filteredCars: CarProps[];
  noResults: boolean; // State for no results
  fetchCars: () => void;
  filterCars: (make: string, year: string, transmission: string) => void;
  fetchCarById: (id: string) => Promise<CarProps | undefined>;
}

const CarContext = createContext<CarContextProps | undefined>(undefined);

export const CarProvider = ({ children }: { children: ReactNode }) => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarProps[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);

  const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://car-rental-ten-sooty.vercel.app/api/cars' 
  : 'http://localhost:8800/api/cars';


  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get("https://car-rental-project-api.vercel.app/cars");
      setCars(response.data);
      setFilteredCars(response.data);
      console.log(response.data);
      setNoResults(false); // Reset no results when fetching cars
    } catch (error) {
      console.error('Error fetching cars', error);
    }
  };

  const filterCars = async (make: string, year: string, transmission: string) => {
    let query = `https://car-rental-project-api.vercel.app/cars?`;

    if (make !== '') {
      query += `make=${make}&`;
    }
    if (year !== '') {
      query += `year=${year}&`;
    }
    if (transmission !== '') {
      query += `transmission=${transmission}&`;
    }

    try {
      const response = await axios.get(query);
      const results = response.data;
      setFilteredCars(results);
      setNoResults(results.length === 0); // Set no results if filtered cars are empty
    } catch (error) {
      console.error('Error filtering cars', error);
      setNoResults(true); // Set no results on error
    }
  };

  const fetchCarById = async (id: string) => {
    try {
      const response = await axios.get(`https://car-rental-project-api.vercel.app/cars/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching car by id', error);
    }
  };

  return (
    <CarContext.Provider value={{ cars, filteredCars, noResults, fetchCars, filterCars, fetchCarById }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCarContext must be used within a CarProvider');
  }
  return context;
};
