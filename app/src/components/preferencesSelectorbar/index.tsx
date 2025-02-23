import React from "react";
import PreferenceToggle from "../preferencestoggle";

const PreferencesSelectorbar = () => {
  return (
    <div>
      {" "}
      <div className={"flex flex-row items-center gap-4 mt-4 flex-wrap"}>
        <PreferenceToggle
          label={"High Protein"}
          toggleProperty={"isHighProtein"}
          //   dietaryPreferences={dietaryPreferences}
          //   setDietaryPreferences={setDietaryPreferences}
          //   iconComponent={<Beef className={"mr-2"} />}
        />
        <PreferenceToggle
          label={"Low Carb"}
          toggleProperty={"isLowCarb"}
          //   dietaryPreferences={dietaryPreferences}
          //   setDietaryPreferences={setDietaryPreferences}
          //   iconComponent={
          //     <Bread size={"22"} weight={"bold"} className={"mr-2"} />
          //   }
        />
      </div>
    </div>
  );
};

export default PreferencesSelectorbar;
