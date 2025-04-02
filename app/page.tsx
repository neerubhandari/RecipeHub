import Banner from "./src/components/banner";
import AppFooter from "./src/components/footer";
import Header from "./src/components/header";
import MoodMenu from "./src/components/moodMenu";
import { RecipeSubsection } from "./src/components/recipesubsection";
import Recipes from "./src/components/recipies";

export default function Home() {
  return (
    <div className="max-w-[1440px]">
      <Header />
      <Banner />
      <div className="mt-20">
        <RecipeSubsection />
        <div className="mt-10">
          <MoodMenu />
        </div>
        <AppFooter />
        {/* <Recipes /> */}
      </div>
    </div>
  );
}
