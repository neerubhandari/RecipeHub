import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-3xl font-bold cursor-pointer">
        RECIPE<span className="text-[#FF7F50]">HUB</span>
      </h1>
    </Link>
  );
};

export default Logo;
