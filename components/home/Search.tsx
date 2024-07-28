import React from "react";

const Search = () => {
  return (
    <div className="mx-auto -mt-16 max-w-[780px] rounded-lg bg-white p-6 shadow-md">
      {/* Search Div */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="What do you want to read?"
          className="w-full rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="rounded-r-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
          Ctrl+K
        </button>
        <span className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>

      {/* Surah Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {[
          "Al-Mulk",
          "Al-Kahf",
          "Ya-Sin",
          "Ya-Sin",
          "As-Sajdah",
          "Al-Waqi'ah",
          "Al-Ikhlas",
        ].map((surah) => (
          <button
            key={surah}
            className="rounded-full bg-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-300"
          >
            {surah}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
