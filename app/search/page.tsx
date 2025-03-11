import Header from "../src/components/header";
import SearchRecipeCard from "../src/components/searchrecipe";

export default function SearchRecipe() {
  return (
    <>
      <div className="max-w-[1440px] px-[20px]">
        <Header />

        <SearchRecipeCard />
      </div>
    </>
  );
}
