"use client";
import React, { useEffect, useState } from "react";
import PlatformNameSkeleton from "../Skeletons/PlatformNameSkeleton";
import PlatformButton from "../UI/PlatformButton";
import GameDetailSkeleton from "../Skeletons/GameDetailSkeleton";
import GameDetail from "../Game/GameDetail";

const PlatformGames = ({ games, platforms, isLoading }) => {
  const [activePlatform, setActivePlatform] = useState("All");
  const [platformGameList, setPlatformGameList] = useState(games);
  const [platformName, setPlatformName] = useState("");
  const handlePlatformButtonClick = (name, gameList) => {
    if (name === "All") {
      setPlatformGameList(games);
      setPlatformName("");
    } else {
      setPlatformGameList(gameList);
      setPlatformName(name);
    }
    setActivePlatform(name);
  };

  useEffect(() => {
    if (activePlatform === "All") {
      setPlatformGameList(games);
    }
  }, [activePlatform, games]);

  return (
    <section className="platform-games pb-[150px]">
      <div className="platform-names mb-[60px]">
        <ul className="unstyled flex flex-row flex-wrap gap-y-6 justify-center items-center px-2">
          {isLoading ? (
            <PlatformNameSkeleton />
          ) : (
            <>
              <li className="relative">
                <PlatformButton
                  name="All"
                  isActive={activePlatform === "All"}
                  onClick={() => handlePlatformButtonClick("All", games)}
                />
              </li>
              {platforms?.map((platform) => (
                <li className="relative" key={platform.id}>
                  <PlatformButton
                    key={platform.name}
                    name={platform.name}
                    isActive={activePlatform === platform.name}
                    onClick={() =>
                      handlePlatformButtonClick(platform.name, platform.games)
                    }
                  />
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
      <div className="al-games mb-[50px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px]">
        {isLoading
          ? Array(8)
              .fill(null)
              .map((_, i) => <GameDetailSkeleton key={i} />)
          : [...platformGameList]
              ?.sort((a, b) => (a.dateCreated < b.dateCreated ? 1 : -1))
              .slice(0, 8)
              .map((game) => <GameDetail key={game.id} {...game} />)}
      </div>
      <div className="flex justify-center items-center">
        <ul className="unstyled">
          <li className="relative">
            <PlatformButton
              name={`all ${platformName} games`}
              link={platformName ? `games/platform/${platformName}` : "/games"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlatformGames;
