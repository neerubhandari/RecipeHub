import vegan from "./../../vegan.json";

export async function getRecipeCollection() {
  return [...vegan];
}
