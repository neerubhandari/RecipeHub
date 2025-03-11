"use client";
import React from "react";
import SearchBox from "../searchbox";

const SearchRecipeCard = () => {
  const handleSearchRecipe = () => {};
  return (
    <div className=" flex justify-center w-[100%] ">
      <SearchBox onClick={handleSearchRecipe} className={"max-w-5xl"} />
    </div>
  );
};

export default SearchRecipeCard;
