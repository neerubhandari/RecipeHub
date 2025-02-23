import vegan from "./../../vegan.json";
import React from "react";

export async function getRecipeCollection() {
  return [...vegan];
}
