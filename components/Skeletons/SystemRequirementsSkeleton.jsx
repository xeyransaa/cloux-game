import React from "react";

const SystemRequirementsSkeleton = () => {
  return (
    <div
      role="status"
      className="max-w-md p-4 space-y-4 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700"
    >
      <div className="flex items-center justify-between">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SystemRequirementsSkeleton;
