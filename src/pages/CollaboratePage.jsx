import { useState } from "react";
import AddRecipe from "../components/AddRecipe";
import RecipeList from "../components/RecipeList";

function CollaboratePage({
  recipes,
  onAddRecipe,
  onDeleteRecipe,
  favorites,
  onToggleFavorite,
  onUpdateRecipe,
}) {

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleEditClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCancelEdit = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      <AddRecipe
        onAddRecipe={onAddRecipe}
        onUpdateRecipe={onUpdateRecipe}
        initialRecipe={selectedRecipe}
        onCancelEdit={handleCancelEdit}
      />

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
