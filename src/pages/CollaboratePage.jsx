import { useState } from "react";
import AddRecipe from "../components/AddRecipe";
import RecipeList from "../components/RecipeList";

function CollaboratePage({
  recipes,
  onAddRecipe,
  onDeleteRecipe,
  favorites,
  onToggleFavorite,
}) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleEditClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <>
      <AddRecipe onAddRecipe={onAddRecipe} initialRecipe={selectedRecipe}/>

       <RecipeList
        recipes={recipes}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
        onEditRecipe={handleEditClick}
        onDeleteRecipe={onDeleteRecipe}
      />
    </>
  );
}
export default CollaboratePage;
