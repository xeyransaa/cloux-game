"use client";
import React from "react";
import GameCoverDetail from "../Game/GameCoverDetail";
import GameDetailSkeleton from "../Skeletons/GameDetailSkeleton";

const FeaturedGames = ({ featured, isLoading }) => {
  return (
    <section className="featured px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[120px]">
      <div className="game-wrapper min-[1200px]:max-w-[1140px] max-w-full mx-auto">
        <div className="featured-title text-center mb-[60px]">
          <h1 className="uppercase text-[40px] font-black">
            Featured <span className="text-yel">games</span>
          </h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
          {isLoading
            ? Array(6)
                .fill(null)
                .map((_, i) => <GameDetailSkeleton key={i} />)
            : [...featured]
                ?.sort((a, b) => (a.dateCreated < b.dateCreated ? 1 : -1))
                .slice(0, 6)
                .map((game) => <GameCoverDetail key={game.id} {...game} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
