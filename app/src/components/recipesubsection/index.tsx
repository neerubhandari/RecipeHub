"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";

import RecipeCard from "../recipecard";
import { getRecipeCollection } from "../../api/api";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import PreferencesSelectorbar from "../preferencesSelectorbar";

export const RecipeSubsection = () => {
  const [recipeCollection, setRecipeCollection] = useState([]);
  useEffect(() => {
    getRecipeCollection().then((result) => setRecipeCollection(result));
  }, []);

  return (
    <div className={" rounded-lg"}>
      <div className={"flex flex-row items-center gap-2 text-3xl"}>
        {/* {headerIcon && headerIcon} */}
        <h1 className={"font-semibold"}>Simple And Tasty Recipes .</h1>
      </div>

      <Separator className={"w-full h-[1px] mb-8 mt-3"} />
      <div className={"mb-10"}>
        <PreferencesSelectorbar />
      </div>
      <ScrollArea className={"side-scrolling-container max-w-[95vw]"}>
        {/*<div*/}
        {/*  className={(*/}
        {/*    "grid place-items-center gap-12",*/}
        {/*    "grid-cols-6 max-[2140px]:grid-cols-5 max-[1640px]:grid-cols-4 max-[1130px]:grid-cols-3 max-[950px]:grid-cols-2 max-[550px]:grid-cols-1",*/}
        {/*  )}*/}
        {/*>*/}
        <div
          className={
            "flex flex-row justify-start items-center gap-12 whitespace-nowrap pb-10 pr-16"
          }
        >
          {!!recipeCollection && recipeCollection.length > 0 ? (
            recipeCollection.map((recipe, index) => (
              <div key={index}>
                <RecipeCard
                  recipe={recipe}
                  //   isSelected={selectedRecipeIds.includes(recipe.recipeId)}
                  //   setSelectedRecipeIds={setSelectedRecipeIds}
                />
              </div>
            ))
          ) : (
            <p className={"font-light text-black text-sm"}>
              It looks like we couldn't find any
              {/* {label.toLowerCase()}  */}
              recipes that align with your preferences.
            </p>
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
