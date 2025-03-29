import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTags, FaTv } from "react-icons/fa6";

const GameDetail = ({
  id,
  name,
  posterUrl,
  categoryNames,
  platformNames,
  shortDescription,
}) => {
  return (
    <div className="game-single ">
      {/* Game Poster */}
      <div className="relative w-full mb-5 shadow-[0_0_3rem_rgba(0,0,0,0.23)]">
        <Link href={`/games/${id}`}>
          <Image
            src={`/img/${posterUrl}`}
            alt={`${name} poster`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>

        {/* Game Categories */}
        <div className="flex items-center absolute bottom-5 right-5 text-white text-[10px]">
          {categoryNames?.map((categoryName, index) => (
            <React.Fragment key={categoryName}>
              <Link href={`/games/category/${categoryName}`} className="uppercase">
                {categoryName}
              </Link>
              {index < categoryNames.length - 1 && (
                <span className="mr-[5px]">,</span>
              )}
            </React.Fragment>
          ))}

          <FaTags className="ml-2 text-yel" />
        </div>
      </div>

      {/* Game Title */}
      <div className="text-[18px] font-black uppercase mb-[10px]">
        <Link
          href={`/games/${id}`}
          className="hover:text-yel transition-all duration-400"
        >
          {name}
        </Link>
      </div>

      {/* Game Platforms */}
      <div className="flex items-center text-[10px] mb-[10px]">
        <FaTv className="text-yel mr-[10px] text-[15px]" />
        {platformNames?.map((platformName, index) => (
          <React.Fragment key={platformName}>
            <Link
              className="transition duration-200 ease-in hover:text-yel uppercase"
              href={`/games/platform/${platformName}`}
            >
              {platformName}
            </Link>
            {index < platformNames.length - 1 && (
              <span className="mr-[5px]">,</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Short Description */}
      <div className="text-[14px] text-[#777] h-[40px] overflow-hidden">
        <p>{shortDescription}</p>
      </div>
    </div>
  );
};

export default GameDetail;
