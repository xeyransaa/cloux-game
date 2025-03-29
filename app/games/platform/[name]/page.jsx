"use client";
import { BASE_URL } from "@/api/BaseConfig";
import Footer from "@/components/Footer";
import GameDetail from "@/components/GameDetail";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Newsletter from "@/components/Newsletter";
import SocialMedia from "@/components/SocialMedia";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PlatformGames = () => {
  const { name } = useParams();
  const [platformGames, setPlatformGames] = useState([]);
  const getPlatform = (name) => {
    fetch(BASE_URL + `Platform/name/${name}`)
      .then((c) => c.json())
      .then((p) => setPlatformGames(p.data.games));
  };

  useEffect(() => {
    getPlatform(name);
  }, [name]);

  const decodedName = decodeURIComponent(name);

  return (
    <>
      <Header />
      <Heading name={`${decodedName} games`} />
      <section className="main">
        <div className="games min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[80px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...platformGames]
              ?.sort((a, b) => (a.dateCreated > b.dateCreated ? 1 : -1))
              .map((g) => (
                <GameDetail {...g} />
              ))}
          </div>
        </div>
      </section>
      <Newsletter />
      <SocialMedia />
      <Footer />

      
    </>
  );
};

export default PlatformGames;
