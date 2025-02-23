import Banner from "./src/components/banner";
import AppFooter from "./src/components/footer";
import Header from "./src/components/header";
import MoodMenu from "./src/components/moodMenu";
import { RecipeSubsection } from "./src/components/recipesubsection";
import Recipes from "./src/components/recipies";

export default function Home() {
  return (
    <div className="max-w-[1440px] px-[20px]">
      <Header />
      <Banner />
      <div className="mt-20">
        {/* <div>
          <h1>Simple And Tasty Recipes .</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            interdum, nunc ut consequat posuere, metus quam ultricies mauris,
            nec lacinia nunc odio sit amet ipsum. Nullam euismod, nunc ac
            convallis blandit, purus odio ultricies nunc, vel feugiat nisl orci
            nec felis.
          </p>
        </div> */}
        <RecipeSubsection />
        <div className="my-10">
          <MoodMenu />
        </div>
        <AppFooter />
        {/* <Recipes /> */}
      </div>
    </div>
  );
}
