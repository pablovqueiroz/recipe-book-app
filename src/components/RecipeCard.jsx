import { Link, NavLink } from "react-router";
import FavoriteButton from "./FavoriteButton";

function RecipeCard({
  recipe,
  isFavorite,
  onToggleFavorite,
  onEditRecipe,
  onDeleteRecipe,
}) {
  const { name, calories, image, servings } = recipe;

  const showActions = onEditRecipe && onDeleteRecipe;

  return (
    <div className="card">
      <FavoriteButton
        isFavorite={isFavorite}
        onClick={() => onToggleFavorite(recipe)}
      />
      <h2>{name}</h2>

      <Link to={`/recipes/${recipe.id}`} className="recipe-card-link">
        <img src={image} alt={name} />
      </Link>

      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>

      {showActions && (
        <>
          <button onClick={() => onDeleteRecipe(recipe.id)}>🗑️</button>
          {onEditRecipe && (
            <span>
              <button onClick={() => onEditRecipe(recipe)}>✏️</button>
            </span>
          )}
        </>
      )}
    </div>
  );
}

export default RecipeCard;
