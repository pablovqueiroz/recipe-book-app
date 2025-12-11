import { Link, NavLink } from "react-router";
function RecipeCard({ recipe }) {
  const { name, calories, image, servings } = recipe;

  return (
    <Link to="/RecipesPage">
    <div className="card">
      <Link to ="/Favorites">
      <button>🤍</button>
      </Link>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      
    </div>
    </Link>
  );
}

export default RecipeCard;
