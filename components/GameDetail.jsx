import Image from "next/image";
import React from "react";
import { FaTags, FaTv } from "react-icons/fa6";

const GameDetail = (props) => {
  return (
    <div className="game-single ">
      <div className="image relative w-full mb-[20px] shadow-[0_0_3rem_rgba(0,0,0,0.23)]">
        <a href={`/games/${props.id}`} className="">
          <Image
            src={`/img/${props.smallPhotoUrl}`}
            alt="game-image"
            width={0}
            height={0}
            sizes="100vw"
            style={{width:'100%', height:'auto'}}
          ></Image>
        </a>
        <div className="categories flex items-center absolute bottom-[20px] right-[20px] text-white text-[10px]">
        {props.categoryNames?.map((categoryName, index) => (
          <React.Fragment key={props.id}>
            <a href="" className="uppercase">
              {categoryName}
            </a>
            {index < props.categoryNames.length - 1 && (
              <span className="mr-[5px]">,</span>
            )}
          </React.Fragment>
        ))}
          
          <FaTags className="ml-[10px] text-yel" />
        </div>
      </div>
      <div className="title text-[18px] font-black uppercase mb-[10px]">
        <a href={`/games/${props.id}`} className="hover:text-yel transition-all duration-400">
          {props.name}
        </a>
      </div>
      <div className="platform flex items-center text-[10px] mb-[10px]">
        <FaTv className="text-yel mr-[10px] text-[15px]" />

        {props.platformNames?.map((platformName, index) => (
          <React.Fragment key={props.id}>
            <a
              className="transition duration-200 ease-in hover:text-yel uppercase"
              href="#"
            >
              {platformName}
            </a>
            {index < props.platformNames.length - 1 && (
              <span className="mr-[5px]">,</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="short-desc text-[14px] text-[#777]">
        <p className="h-[40px] overflow-hidden">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default GameDetail;
