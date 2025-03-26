import React from "react";

const LanguagesSkeleton = () => {
  return (
    <div
      role="status"
      className="max-w-md p-4 space-y-4  divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
      <div className="flex items-center justify-between">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
        <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
        <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
        <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
        <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
        <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LanguagesSkeleton;
