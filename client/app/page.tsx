'use client';

import { CarCard, Hero, SearchBar } from "@/components";
import CarDetails from "@/components/card/CardDetails";
import CardHem from "@/components/home/CardHome";
import PickupDropoffForm from "@/components/home/PickupDropoffForm";
import Reviews from "@/components/home/Reviews";
import { useCarContext } from "@/context/carContext";
import { CarProps } from "@/types";
import { useState } from "react";
import React from 'react';

const Home = () => {

  return (
    <main className='overflow-hidden'>
      <Hero />
        <CardHem />
      <div className="flex flex-col justify-center  pt-5 items-center md:flex-row">
        <Reviews />
        <Reviews />
        <Reviews />
      </div>
    </main>
  );
}

export default Home;
