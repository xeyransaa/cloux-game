"use client";
import Footer from "@/components/Footer";

import GamesList from "@/components/GamesList";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Login from "@/components/Login";
import Newsletter from "@/components/Newsletter";


import SignUp from "@/components/SignUp";
import SocialMedia from "@/components/SocialMedia";

import React, { Suspense, useState } from "react";


const Games = () => {
  
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  
  
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

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          switchToSignUp={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
        />
      )}
      {showSignUp && (
        <SignUp
          onClose={() => setShowSignUp(false)}
          switchToLogin={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }}
        />
      )}
    </>

    
    
  );
};

export default Games;
