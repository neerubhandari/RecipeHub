import React from "react";

const RecipeSearchResultCard = ({ recipe }: any) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg mb-2 flex">
      <img
        src={recipe.recipeImageURL}
        alt="recipe"
        className="w-full h-48 object-cover rounded-lg mt-2"
      />
      <div>
        <h3 className="text-lg font-semibold">{recipe.recipeTitle}</h3>
        <p className="text-gray-600">{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeSearchResultCard;
