import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative w-full h-[700px]">
      <div className="w-full h-full">
        <Image
          src="/banner.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5  text-center">
        <h1 className="text-6xl font-bold">Anyone can be a Chef</h1>
        <h5 className="text-lg">Discover the secret of good cooking</h5>
        <div>
          <button className="px-6 py-2 flex items-center gap-3 justify-center bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">
            Start Cooking <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
