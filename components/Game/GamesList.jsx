"use client";

import GameDetail from "@/components/Game/GameDetail";
import PlatformButton from "@/components/UI/PlatformButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";
import GameDetailSkeleton from "../Skeletons/GameDetailSkeleton";
import { fetchData } from "@/services/api";

const GamesList = () => {
  const searchParams = useSearchParams();
  const pageNumber = parseInt(searchParams.get("page")) || 1;
  const gamesPerPage = 6;
  const router = useRouter();
  const pathname = usePathname();
  const [displayedGames, setDisplayedGames] = useState([]);
  const [isDisplayedGamesLoading, setIsDisplayedGamesLoading] = useState(true);
  const loadGamesByPage = async (pageNumber, gamesPerPage) => {
    const data = await fetchData(
      `Game/page/?pageNumber=${pageNumber}&gamesPerPage=${gamesPerPage}`
    );
    setDisplayedGames(data);
    setIsDisplayedGamesLoading(false);
  };

  const changePage = (newPage) => {
    router.push(`${pathname}?page=${newPage}`);
  };

  const [games, setGames] = useState([]);
  const [isGamesLoading, setIsGamesLoading] = useState(true);
  const loadGames = async () => {
    const data = await fetchData("Game");

    setGames(data);
    setIsGamesLoading(false);
  };
  useEffect(() => {
    loadGames();
    loadGamesByPage(pageNumber, gamesPerPage);
  }, [pageNumber]);

  const pagesCount = Math.ceil(games.length / gamesPerPage);
  useEffect(() => {
    if (games.length > 0) {
      if (pageNumber > pagesCount) {
        router.replace(`${pathname}?page=${pagesCount}`);
      } else if (pageNumber < 1) {
        router.replace(`${pathname}?page=1`);
      }
    }
  }, [pageNumber, pagesCount, games]);
  return (
    <section className="main">
      <div className="games min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[80px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {isGamesLoading || isDisplayedGamesLoading
            ? Array.from({ length: 6 }).map((i) => <GameDetailSkeleton />)
            : displayedGames.map((g) => <GameDetail key={g.id} {...g} />)}
        </div>
        {games.length > gamesPerPage &&
          !isDisplayedGamesLoading &&
          !isGamesLoading && (
            <ul className="unstyled flex flex-row flex-wrap items-center justify-center mt-[50px] gap-y-[20px] px-2">
              <li
                className="relative"
                onClick={() => {
                  changePage(1);
                }}
              >
                <PlatformButton name={<FaAnglesLeft />} />
              </li>
              <li
                className="relative"
                onClick={() => {
                  pageNumber - 1 > 0 && changePage(pageNumber - 1);
                }}
              >
                <PlatformButton name={<FaAngleLeft />} />
              </li>
              {pageNumber <= 3
                ? Array.from({ length: pagesCount > 5 ? 5 : pagesCount }).map(
                    (_, i) => (
                      <li
                        className="relative"
                        key={i}
                        onClick={() => {
                          changePage(i + 1);
                        }}
                      >
                        <PlatformButton
                          name={i + 1}
                          isActive={pageNumber === i + 1}
                        />
                      </li>
                    )
                  )
                : pagesCount - pageNumber <= 2
                ? Array.from({ length: pagesCount > 5 ? 5 : pagesCount }).map(
                    (_, i) => (
                      <li
                        className="relative"
                        key={i}
                        onClick={() => {
                          changePage(i + pagesCount - 4);
                        }}
                      >
                        <PlatformButton
                          name={i + pagesCount - 4}
                          isActive={pageNumber === i + pagesCount - 4}
                        />
                      </li>
                    )
                  )
                : Array.from({ length: pagesCount > 5 ? 5 : pagesCount }).map(
                    (_, i) => (
                      <li
                        className="relative"
                        key={i}
                        onClick={() => {
                          changePage(i + pagesCount - 2);
                        }}
                      >
                        <PlatformButton
                          name={i + pagesCount - 2}
                          isActive={pageNumber === i + pagesCount - 2}
                        />
                      </li>
                    )
                  )}
              <li
                className="relative"
                onClick={() => {
                  pageNumber + 1 <= pagesCount && changePage(pageNumber + 1);
                }}
              >
                <PlatformButton name={<FaAngleRight />} />
              </li>
              <li
                className="relative"
                onClick={() => {
                  changePage(pagesCount);
                }}
              >
                <PlatformButton name={<FaAnglesRight />} />
              </li>
            </ul>
          )}
      </div>
    </section>
  );
};

export default GamesList;
