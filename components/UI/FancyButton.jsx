import React from "react";

const FancyButton = (props) => {
  return (
    <a
      href={props.link}
      className="text-yel text-[13px] relative border-b-2 border-yel border-solid px-[20px] py-[10px] font-bold before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-yel hover:before:h-full before:transition-all before:duration-300 hover:text-white hover:transition-all hover:duration-300 hover:cursor-pointer"
    >
      <span className="relative z-10 uppercase">{props.content}</span>
    </a>
  );
};

export default FancyButton;
