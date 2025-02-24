"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DotLoader } from "react-spinners";
import { FaCaretLeft } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { getRecipeObjectByIdOrNull } from "@/app/src/utility/utils";
import { Skeleton } from "@/app/src/components/ui/skeleton";
import { Separator } from "@/app/src/components/ui/separator";
import { getRecipeCollection } from "@/app/src/api/api";

export default function RecipeDetailsPage() {
  const [activeRecipe, setActiveRecipe] = useState<any>(null);
  const [numServings, setNumServings] = useState(1);
  const [fabricatedWaitRunning, setFabricatedWaitRunning] = useState(true);
  // const navigate = useNavigate();
  const { id } = useParams<{ id: any }>();
  console.log(id, "idneeru");

  const [recipeCollection, setRecipeCollection] = useState([]);

  useEffect(() => {
    getRecipeCollection().then((result) => setRecipeCollection(result));
  }, []);

  useEffect(() => {
    if (recipeCollection) {
      const urlArr = window.location.href.split("/");
      console.log({ inLocal: localStorage.getItem("recipeCollection") });
      const recipeCollectionToSearch = !!localStorage.getItem(
        "recipeCollection"
      )
        ? JSON.parse(localStorage.getItem("recipeCollection")!)
        : recipeCollection;
      const identifiedRecipe = getRecipeObjectByIdOrNull(
        recipeCollectionToSearch,
        id ?? urlArr[urlArr.length - 1]
      );
      !!identifiedRecipe && setActiveRecipe(identifiedRecipe!);
    }
  }, [recipeCollection, id]);

  useEffect(() => {
    console.log({ activeRecipe });

    !!activeRecipe && setNumServings(activeRecipe.numServings);
  }, [activeRecipe]);

  useEffect(() => {
    setTimeout(() => setFabricatedWaitRunning(false), 450);
  }, []);

  if (!activeRecipe || !activeRecipe.recipeTitle || fabricatedWaitRunning) {
    return (
      <div className={"flex justify-center items-center w-screen h-screen"}>
        <DotLoader />
      </div>
    );
  }

  const multiplierOnOriginalQty = numServings / activeRecipe.numServings;

  return (
    <div
      className={
        "flex flex-col items-center py-24 sm:px-24 px-8 min-h-screen 2xl:max-w-[60%] mx-auto"
      }
    >
      <Button
        className={"w-fit absolute top-[85px] left-5"}
        size={"sm"}
        // onClick={() => navigate(-1)}
      >
        <FaCaretLeft className={"mr-1.5"} />
        <span>Go Back</span>
      </Button>
      {/* TOP ROW */}
      <div
        className={cn(
          "flex justify-between gap-10 w-full",
          "max-[1200px]:flex-col flex-row"
        )}
      >
        {/* TOP ROW LEFT COLUMN */}
        <div className={"flex flex-col items-start"}>
          <div className={"flex flex-row items-center gap-2 my-4 flex-wrap"}>
            <Badge className={"bg-emerald-800"}>Top rated</Badge>
            <Badge className={"bg-zinc-800"}>
              {activeRecipe.BLD ?? "Lunch"}
            </Badge>
            <Badge className={"bg-slate-800"}>
              {activeRecipe.recipeTitle.split(" ")[0]}
            </Badge>
            <Badge className={"bg-zinc-600"}>Mediterranean</Badge>
          </div>
          <h1 className={"text-6xl font-bold mt-4"}>
            {activeRecipe.recipeTitle}
          </h1>
          <p className={"text-lg font-base text-zinc-500 mb-1"}>
            {activeRecipe.recipeDescription}
          </p>

          <div
            className={
              "mt-8 flex flex-row items-center gap-2.5 max-[850px]:mb-8"
            }
          ></div>
          <div
            className={cn(
              "flex flex-row justify-center items-center mt-auto -ml-4 max-[850px]:mb-8",
              "max-[850px]:mx-auto"
            )}
          >
            <div
              className={"flex flex-col items-center sm:p-6 p-2 sm:w-32 w-28"}
            >
              <p className={"font-semibold 2xl:text-xl sm:text-lg text-sm"}>
                Prep
              </p>
              <p className={"font-light mt-2 text-sm"}>
                {activeRecipe.prepTime}
              </p>
            </div>
            <div
              className={
                "flex flex-col items-center sm:p-6 p-2 border-x-[1px] border-[#12b312]/20 sm:w-32 w-28"
              }
            >
              <p className={"font-semibold 2xl:text-xl sm:text-lg text-sm"}>
                Cook
              </p>
              <p className={"font-light mt-2 text-sm"}>
                {activeRecipe.cookTime}
              </p>
            </div>
            <div
              className={"flex flex-col items-center sm:p-6 p-2 sm:w-32 w-28"}
            >
              <p className={"font-semibold 2xl:text-xl sm:text-lg text-sm"}>
                Difficulty
              </p>
              <p className={"font-light mt-2 text-sm"}>Easy</p>
            </div>
          </div>
        </div>

        <div className={"flex flex-col"}>
          <div
            className={
              "size-[36rem] max-[1200px]:size-42 aspect-square overflow-hidden rounded-2xl"
            }
          >
            {!!activeRecipe.recipeImageURL ? (
              <img
                className={"min-h-full min-w-full object-cover"}
                src={activeRecipe.recipeImageURL}
                alt="Recipe preview"
              />
            ) : (
              <Skeleton className={"size-[36rem]"} />
            )}
          </div>
        </div>
      </div>

      <Separator className={"h-[1px] my-8 mx-8 "} />

      {/* DESCRIPTION ROW*/}
      {!!activeRecipe.recipeLongIntro && (
        <div className={"self-start mb-6 text-zinc-600"}>
          {activeRecipe.recipeLongIntro}
        </div>
      )}

      {/* INGREDIENTS AND METHOD ROW */}
      <div
        className={cn(
          "grid w-full mt-8 mb-8 gap-24",
          "max-[850px]:grid-cols-1 grid-cols-[6fr_7fr]"
        )}
      >
        <div className={"flex flex-col items-start"}>
          <div className="flex flex-row items-center justify-between w-full">
            <h2 className={"text-4xl font-semibold"}>Ingredients</h2>
          </div>
          <Separator className={"mb-5 mt-2.5 bg-[#12b312]/15"} />

          <ul className="flex flex-col list-disc ml-[1.5ch] gap-3 mt-4">
            {activeRecipe.recipeIngredients.map(
              (ingredient: any, index: number) => {
                return (
                  <li key={index}>
                    {`${ingredient.qtyNumber * multiplierOnOriginalQty} ${
                      ingredient.qtyUnit
                    } ${ingredient.product}`}
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className={"flex flex-col items-start"}>
          <h2 className={"text-4xl font-semibold"}>Method</h2>
          <Separator className={"mb-5 mt-2.5 bg-[#12b312]/15"} />
          <ol className={"flex flex-col list-decimal ml-[1.5ch] gap-3"}>
            {activeRecipe.recipeSteps.map((step, index) => {
              return (
                <li key={index}>
                  {step}
                  {index !== activeRecipe.recipeSteps.length - 1 && "."}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
