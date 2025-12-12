import { Link, NavLink } from "react-router";
function RecipeCard({ recipe }) {
  const { name, calories, image, servings } = recipe;

  return (
    
    <div className="card">
      <Link to ="/Favorites">
      <button>🤍</button>
      </Link>
      <h2>{name}</h2>

      <Link to= "/Recipes/:recipesId">
      <img src={image} alt={name} />
       </Link>
      
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      
    </div>
    
  );
}

export default RecipeCard;
