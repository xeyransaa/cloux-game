import React from "react";

const CartItemSkeleton = () => {
  return (
    <div
      role="status"
      className="p-4 space-y-4  divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 w-full"
    >
      <div className="flex justify-between">
        <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div className="w-1/2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default CartItemSkeleton;
