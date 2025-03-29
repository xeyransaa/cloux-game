"use client";
import Footer from "@/components/Footer";

import GamesList from "@/components/GamesList";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Newsletter from "@/components/Newsletter";
import SocialMedia from "@/components/SocialMedia";

import React, { Suspense, useState } from "react";


const Games = () => {
  
 
  return (
    
      <>
      <Header />
      <Heading name="games" />
      <Suspense fallback={<div>Loading...</div>}> 
      <GamesList/>

      </Suspense>
      
      <Newsletter />
      <SocialMedia />
      <Footer />

  
    </>

    
    
  );
};

export default Games;
