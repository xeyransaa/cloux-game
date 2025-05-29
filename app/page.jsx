"use client";
import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "@/services/api";
import Header from "@/components/Layout/Header";
import HeroSlider from "@/components/Home/HeroSlider";
import AboutCards from "@/components/About/AboutCards";
import PlatformGames from "@/components/Home/PlatformGames";
import NewGame from "@/components/Home/NewGame";
import FeaturedGames from "@/components/Home/FeaturedGames";
import AboutGamehaze from "@/components/Home/AboutGamehaze";
import Newsletter from "@/components/Layout/Newsletter";
import SocialMedia from "@/components/Layout/SocialMedia";
import Footer from "@/components/Layout/Footer";

const Home = () => {
  const [data, setData] = useState({
    games: [],
    featured: [],
    platforms: [],
  });
  const [loading, setLoading] = useState({
    games: true,
    featured: true,
    platforms: true,
  });
  const loadData = async () => {
    const [games, featured, platforms] = await Promise.all([
      fetchData("Game"),
      fetchData("Game/featured"),
      fetchData("Platform"),
    ]);
    setData({
      games,
      featured,
      platforms,
    });
    setLoading({
      games: false,
      featured: false,
      platforms: false,
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header />
      <HeroSlider featured={data.featured} isLoading={loading.featured} />
      <AboutCards />
      <PlatformGames
        games={data.games}
        platforms={data.platforms}
        isLoading={loading.games || loading.platforms}
      />
      <NewGame />
      <FeaturedGames featured={data.featured} isLoading={loading.featured} />
      <AboutGamehaze />
      <Newsletter />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Home;
