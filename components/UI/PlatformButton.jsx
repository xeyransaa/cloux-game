import React from "react";

const PlatformButton = ({ name, isActive, onClick, link }) => {
  return (
    <a
      href={link}
      onClick={onClick}
      className={`hover:cursor-pointer mx-[10px] uppercase  flex items-center justify-center px-[20px] py-[15px] border-yel border-[2px] border-solid text-[13px] font-bold hover:bg-yel hover:text-white transition-all duration-300 ${
        isActive || (typeof name === "string" && name.includes("In cart"))
          ? "bg-yel text-white"
          : "bg-white text-yel"
      }`}
      style={{
        boxSizing: "border-box",
        textAlign: "center",
        lineHeight: "1",
      }}
    >
      {name}
    </a>
  );
};

export default PlatformButton;
