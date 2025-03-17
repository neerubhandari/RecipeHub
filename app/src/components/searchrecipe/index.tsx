"use client";
import React, { useState } from "react";
import SearchBox from "../searchbox";
import vegan from "../../../vegan.json";
import RecipeSearchResultCard from "../RecipeSearchResultCard";

const SearchRecipeCard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipeCollection, setFilteredRecipeCollection] = useState([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredData = vegan.filter((recipe: any) =>
      recipe.recipeTitle.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filteredData, "filteredData");
    setFilteredRecipeCollection(filteredData);
  };

  return (
    <div className="flex flex-col justify-center w-full items-center">
      <SearchBox
        className="max-w-2xl"
        onChange={handleInputChange}
        inputValue={searchQuery}
      />

      <div className="mt-4 max-w-2xl relative w-full flex  flex-col max-h-[500px] overflow-scroll border rounded-[20px] p-3 border-[#cdcbcb]">
        {filteredRecipeCollection.length > 0
          ? filteredRecipeCollection.map((recipe: any, index) => (
              <div key={index} className="">
                <RecipeSearchResultCard recipe={recipe} />
              </div>
            ))
          : searchQuery && (
              <p className="text-gray-500 mt-4">No recipes found.</p>
            )}
        {/* White Gradient at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default SearchRecipeCard;
