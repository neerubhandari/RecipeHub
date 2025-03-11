"use client";
import Image from "next/image";
import React from "react";
import SearchBox from "../searchbox";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  const handleSearch = () => {
    router.push("/search");
  };
  return (
    <div className="relative w-full h-[600px] flex items-center justify-between px-16">
      <div className="max-w-2xl">
        <h1 className="text-7xl font-bold leading-snug ">
          Hungry ? Let's Find Your Next Meal
        </h1>

        <h6 className="text-sm my-4 text-gray-500">
          Do you know what you should cook today ? We've got your back
        </h6>
        <SearchBox onClick={handleSearch} />
      </div>

      <div className="relative w-1/2 h-full rounded-full">
        <Image
          src="/banner1.png"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="rounded-[1px]"
        />
      </div>
    </div>
  );
};

export default Banner;
