"use client";

import { useEffect, useRef } from "react";

export default function SearchBox({
  onClick,
  className,
  inputValue,
  onChange,
  backgroundColor,
}: any) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={`${className} relative w-full  flex items-center gap-2`}>
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 10 17.5a7.5 7.5 0 0 0 6.65-3.85z"
            />
          </svg>
        </div>

        <input
          ref={inputRef}
          onClick={onClick}
          value={inputValue}
          onChange={onChange}
          type="text"
          placeholder="Search any Recipe"
          className=" w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Search Button */}
      <button
        className={`${backgroundColor} px-4 py-2 text-lg  bg-[#FF7F50] text-white rounded-lg shadow hover:bg-blue-600 transition`}
      >
        Search
      </button>
    </div>
  );
}
