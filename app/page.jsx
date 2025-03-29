"use client";
import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "@/services/api";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutCards from "@/components/AboutCards";
import PlatformGames from "@/components/PlatformGames";
import NewGame from "@/components/NewGame";
import FeaturedGames from "@/components/FeaturedGames";
import AboutCloux from "@/components/AboutCloux";
import Newsletter from "@/components/Newsletter";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

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
      <Header/>
      <HeroSlider featured={data.featured} isLoading={loading.featured}/>
      <AboutCards/>
      <PlatformGames games={data.games} platforms={data.platforms} isLoading={loading.games || loading.platforms}/>
      <NewGame/>
      <FeaturedGames featured={data.featured} isLoading={loading.featured}/>
      <AboutCloux/>
      <Newsletter />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Home;
