import React from "react";

const GameDetailSkeleton = () => {
  return (
    <div className="game-single animate-pulse">
      <div className="w-full h-[200px] bg-gray-300 rounded mb-[20px]"></div>
      <div className="h-[20px] bg-gray-300 w-[70%] mb-[10px] rounded"></div>
      <div className="h-[15px] bg-gray-300 w-[50%] mb-[10px] rounded"></div>
      <div className="h-[40px] bg-gray-200 w-full rounded"></div>
    </div>
  );
};

export default GameDetailSkeleton;