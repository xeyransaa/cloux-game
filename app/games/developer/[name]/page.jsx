"use client";
import Footer from "@/components/Layout/Footer";
import GameDetail from "@/components/Game/GameDetail";
import Header from "@/components/Layout/Header";
import Heading from "@/components/UI/Heading";
import Newsletter from "@/components/Layout/Newsletter";
import GameDetailSkeleton from "@/components/Skeletons/GameDetailSkeleton";
import SocialMedia from "@/components/Layout/SocialMedia";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchData } from "@/services/api";

const DeveloperGames = () => {
  const { name } = useParams();
  const [developerGames, setDeveloperGames] = useState([]);
  const [isGamesLoading, setIsGamesLoading] = useState(true);
  const loadDeveloperGames = async (name) => {
    const data = await fetchData(`Developer/name/${name}`);
    setDeveloperGames(data.data.games);
    setIsGamesLoading(false);
  };

  useEffect(() => {
    loadDeveloperGames(name);
  }, [name]);

  const decodedName = decodeURIComponent(name);

  return (
    <>
      <Header />
      <Heading name={`${decodedName} games`} />
      <section className="main">
        <div className="games min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[80px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {isGamesLoading
              ? Array.from({ length: 8 }).map((i) => {
                  <GameDetailSkeleton key={i} />;
                })
              : [...developerGames]
                  ?.sort((a, b) => (a.dateCreated > b.dateCreated ? 1 : -1))
                  .map((game) => <GameDetail {...game} />)}
          </div>
        </div>
      </section>
      <Newsletter />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default DeveloperGames;
