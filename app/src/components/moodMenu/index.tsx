import React from "react";
import SearchBox from "../searchbox";

const MoodMenu = () => {
  return (
    <div className="bg-[#FF7F50] py-24 flex flex-col gap-5 items-center">
      <h1 className="text-5xl text-white">Mood Menu</h1>
      <div>
        Tell us what you're craving ? Select your current mood from below
        options , we will find you the recipe that speaks to your cravings
      </div>
      <SearchBox />
    </div>
  );
};

export default MoodMenu;
