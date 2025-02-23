import axios from "axios";
import RecipeCard from "../recipecard";

export default async function Recipes() {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
    params: { id: "8138" },
    headers: {
      "x-rapidapi-key": "5414232d05msh346e9b48d8b4cc5p167d33jsn494bc5c4e5b8",
      "x-rapidapi-host": "tasty.p.rapidapi.com",
    },
  };

  let recipes = [];

  try {
    const response = await axios.request(options);
    recipes = response.data.results || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }

  return (
    <div className="p-5">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
