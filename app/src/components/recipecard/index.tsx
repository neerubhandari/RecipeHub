import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  // Replace image size in the URL for better quality
  const highResImage = recipe?.image?.replace("-312x231", "-636x393");
  const randomDifficultyString: any =
    recipe.recipeTitle[0] < "J" ? "Easy" : "Medium";
  return (
    <div className={"rounded-2xl w-72 relative"}>
      <div
        className={
          "transition-all rounded-2xl w-72"
          // isSelected && "border-[#33E14D] border-4 p-2")
        }
      >
        <div
          className={
            "aspect-square rounded-2xl overflow-hidden shadow-md preview-image relative w-full bg-zinc-200 mb-1"
          }
        >
          {!!recipe?.recipeImageURL ? (
            <img
              className={
                "min-h-full min-w-full object-cover rounded-2xl transition-all duration-200 ease-out hover:scale-110 -z-20"
              }
              src={recipe.recipeImageURL}
              // src={
              //   "https://assets.epicurious.com/photos/5f68fb2caeadb5160e3feed7/1:1/w_1920,c_limit/RememberTheAlimony_HERO_091620_11797b_VOG_final.jpg"
              // }
              alt=""
            />
          ) : (
            <Skeleton className="size-full" />
          )}
        </div>
        {/* {recipe.supermarket === "Woolies" ? (
          <img
            src={"/assets/woolworths.svg"}
            alt=""
            className={"absolute -right-6 -bottom-8 w-16"}
          />
        ) : (
          <div
            className={
              "absolute -right-5 -bottom-6 size-14 rounded-xl bg-red-600 flex justify-center items-center"
            }
          >
            <img
              src={"/assets/coles-red.png"}
              className={"brightness-[1000%] saturate-0 w-12"}
              alt=""
            />
          </div>
        )} */}
      </div>
      <div className={"mt-1 pl-2 w-full"}>
        <p className={"2xl:text-lg text-base font-semibold"}>
          {recipe.recipeTitle}
        </p>
        <p
          className={
            "text-xs max-w-64 overflow-hidden text-ellipsis text-nowrap -mb-1"
          }
        >
          {recipe.recipeDescription}
        </p>

        <div className={"mt-2 flex flex-row items-end gap-1"}>
          {/* {!hideRecipePrice && ( */}
          <>
            <p className={"text-2xl font-semibold"}>{`$$20`}</p>
            <p className={"text-xs text-zinc-600 mb-1"}>per serving</p>
          </>
          {/* )} */}
        </div>
        <div className={"flex flex-row justify-start gap-1 items-end w-full"}>
          <Badge
            variant={"secondary"}
            className={cn(
              randomDifficultyString === "Easy" && "bg-green-500",
              randomDifficultyString === "Medium" && "bg-orange-500"
              // randomDifficultyString === "Challenging" && "bg-rose-500",
            )}
          >
            {randomDifficultyString}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
