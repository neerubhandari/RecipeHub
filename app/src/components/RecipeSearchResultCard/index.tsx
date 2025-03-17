import Link from "next/link";
import React from "react";

const RecipeSearchResultCard = ({ recipe }: any) => {
  return (
    <Link href={`/recipe/${recipe.recipeId}`}>
      <div className="p-5 border  border-gray-300 rounded-lg mb-2 grid grid-cols-2 w-[100%] gap-12 items-center">
        <div>
          <img
            src={recipe.recipeImageURL}
            alt="recipe"
            className=" hover:scale-110 w-full h-24 object-cover rounded-lg mt-2"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{recipe.recipeTitle}</h3>
          <p className="text-gray-600">{recipe.recipeDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeSearchResultCard;
