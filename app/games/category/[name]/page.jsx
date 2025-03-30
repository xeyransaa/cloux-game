"use client";
import Footer from "@/components/Layout/Footer";
import GameDetail from "@/components/Game/GameDetail";
import Header from "@/components/Layout/Header";
import Heading from "@/components/UI/Heading";
import Newsletter from "@/components/Layout/Newsletter";
import SocialMedia from "@/components/Layout/SocialMedia";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchData } from "@/services/api";
import GameDetailSkeleton from "@/components/Skeletons/GameDetailSkeleton";

const CategoryGames = () => {
  const { name } = useParams();
  const [categoryGames, setCategoryGames] = useState([]);
  const [isCategoryGamesLoading, setIsCategoryGamesLoading] = useState(true)
  const loadCategoryGames = async (name) => {
    const data = await fetchData(`Category/name/${name}`)
    setCategoryGames(data.data.games);
    setIsCategoryGamesLoading(false)
  };

  useEffect(() => {
    loadCategoryGames(name);
  }, [name]);

  const decodedName = decodeURIComponent(name);

  return (
    <>
      <Header />
      <Heading name={`${decodedName} games`} />
      <section className="main">
        <div className="games min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[80px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {isCategoryGamesLoading ? Array(8).fill(null).map((_, i) => <GameDetailSkeleton key={i}/>) : ([...categoryGames]
              ?.sort((a, b) => (a.dateCreated > b.dateCreated ? 1 : -1))
              .map((g) => (
                <GameDetail {...g} />
              ))) }
            
          </div>
        </div>
      </section>
      <Newsletter />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default CategoryGames;
