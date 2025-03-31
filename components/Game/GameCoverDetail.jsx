import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTags, FaTv } from "react-icons/fa6";

const GameCoverDetail = ({
  id,
  name,
  platformNames,
  categoryNames,
  posterUrl,
}) => {
  return (
    <div className="relative overflow-hidden shadow-[0_0_3rem_rgba(0,0,0,0.23)] group cursor-pointer">
      <Link href={`/games/${id}`}>
        {/* Game Poster */}
        <div className="relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-custom after:opacity-70">
          <Image
            src={`/img/${posterUrl}`}
            alt={`${name} poster`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* Game Info */}
        <div className="game-info absolute bottom-[30px] left-[30px] right-[30px] group-hover:translate-y-[150px] transition-all duration-500">
          <div className="game-title uppercase mb-[8px] text-white text-[20px] font-black">
            {name}
          </div>
          <div className="flex items-center flex-wrap">
            <div className="platform flex items-center mr-[20px] flex-wrap">
              <FaTv className="text-yel mr-[10px]" />
              {platformNames?.map((platformName, index) => (
                <React.Fragment key={platformName}>
                  <span className="uppercase text-white text-[10px]">
                    {platformName}
                  </span>
                  {index < platformNames.length - 1 && (
                    <span className="text-white mr-[5px] text-[10px]">,</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="categories flex items-center">
              <FaTags className="text-yel mr-[10px]" />

              {categoryNames?.map((categoryName, index) => (
                <React.Fragment key={categoryName}>
                  <span className="uppercase text-white text-[10px]">
                    {categoryName}
                  </span>
                  {index < categoryNames.length - 1 && (
                    <span className="text-white mr-[5px] text-[10px]">,</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        {/* Yellow hover layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-yel opacity-60 -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>
        <div className="flex items-center justify-center transition-all duration-500 ease-in-out absolute top-0 left-full w-full h-full group-hover:left-0">
          <div className="uppercase text-white text-[20px] font-black text-center">
            {name}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameCoverDetail;
