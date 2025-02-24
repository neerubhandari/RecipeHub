export function getRecipeObjectByIdOrNull(
  recipeCollection: any,
  targetRecipeId: string
) {
  if (!recipeCollection || recipeCollection.length === 0) {
    return null;
  }

  console.log({ searchingIn: recipeCollection });
  console.log({ searchingFor: targetRecipeId });

  const result =
    recipeCollection!.find((recipe) => recipe.recipeId === targetRecipeId) ??
    null;

  return result;
}
