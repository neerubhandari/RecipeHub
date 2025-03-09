import Header from "../src/components/header";
import SearchBox from "../src/components/searchbox";

export default function SearchRecipe() {
  return (
    <>
      <div className="max-w-[1440px] px-[20px]">
        <Header />
        <SearchBox />
      </div>
    </>
  );
}
