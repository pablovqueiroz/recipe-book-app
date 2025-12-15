import { useState } from "react";
import RecipeCard from "./RecipeCard";

const ITEMS_PER_PAGE = 6;

function RecipeList({
  recipes,
  favorites,
  onToggleFavorite,
  onEditRecipe,
  onDeleteRecipe,
}) {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const recipesToShow = recipes.slice(startIndex, endIndex);
  return (
    <>
      <div className="recipe-list">
        {recipesToShow.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.some((r) => r.id === recipe.id)}
            onToggleFavorite={onToggleFavorite}
            onEditRecipe={onEditRecipe}
            onDeleteRecipe={onDeleteRecipe}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            ⬅️
          </button>

          <span>
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            ➡️
          </button>
        </div>
      )}
    </>
  );
}

export default RecipeList;
