"use client";
import Footer from "@/components/Layout/Footer";

import GamesList from "@/components/Game/GamesList";
import Header from "@/components/Layout/Header";
import Heading from "@/components/UI/Heading";
import Newsletter from "@/components/Layout/Newsletter";
import SocialMedia from "@/components/Layout/SocialMedia";

import React, { Suspense } from "react";

const Games = () => {
  return (
    <>
      <Header />
      <Heading name="games" />
      <Suspense fallback={<div>Loading...</div>}>
        <GamesList />
      </Suspense>

      <Newsletter />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Games;
