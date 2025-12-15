import { useParams, Link } from "react-router-dom";
import recipesData from "../recipesData";

function RecipeDetailsPage() {
  const { recipeId } = useParams();

  const recipe = recipesData.find((recipe) => recipe.id === recipeId);

  if (!recipe) {
    return (
      <div className="detail-container not-found-container">
        <h1>Receita Não Encontrada</h1>
        
        <Link to="/" className="back-to-list-link">
          Back to the list.
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-to-list-link">
        ← Back to the list
      </Link>
      <section className="recipe-detail-container">
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} />

        <div>
          <p>
            <strong>🔥 Calories:</strong> {recipe.calories}
          </p>
          <p>
            <strong>🔢 Servings:</strong> {recipe.servings}
          </p>
          <p>
            <strong>🏷️ Type:</strong> {recipe.type}
          </p>
        </div>

        <h2>🥕 Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2>📝 Instructions</h2>
        <p className="recipe-instructions">{recipe.instructions}</p>
      </section>
    </div>
  );
}

export default RecipeDetailsPage;
