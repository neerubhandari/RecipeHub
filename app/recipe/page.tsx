import Recipes from "@/components/recipies";
import SearchBox from "@/components/searchbox";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const recipe = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1>Hello Fola</h1>
          <p className="font-thin">What are you cooking today?</p>
        </div>
        <div>
          <RxAvatar />
        </div>
      </div>
      <SearchBox />
      <Recipes />
    </div>
  );
};

export default recipe;
