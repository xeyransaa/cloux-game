import React, { useState } from "react";

const PlatformButton = ({ name, isActive, onClick, isMoreActive, submenuRef, moreList, link }) => {
  return (
    <li className="platform-name relative">
      <a
       href={link}
        onClick={onClick}
        className={`hover:cursor-pointer uppercase px-[20px] py-[15px] mx-[10px] border-yel border-[2px] border-solid text-[13px] font-bold hover:bg-yel hover:text-white transition-all duration-300 ${
          isActive ? "bg-yel text-white" : "bg-white text-yel"
        }`}
      >
        {name}
      </a>
      {isMoreActive && <ul ref={name === "More" ? submenuRef : null} className="absolute top-[120%] right-[10px] w-[200px] px-[15px] py-[10px] z-40 bg-white border-solid border-[2px] border-[rgba(0,0,0,0.1)]">
        
        <li className="hover:text-yel transition ease-in duration-200 py-[10px] border-b-[1px] last:border-none">
          <a href="" >
            xbox
          </a>
        </li>
        <li className="hover:text-yel transition ease-in duration-200 py-[10px] border-b-[1px] last:border-none">
          <a href="" >
            strema
          </a>
        </li>
        </ul>}
      
    </li>
  );
};

export default PlatformButton;
