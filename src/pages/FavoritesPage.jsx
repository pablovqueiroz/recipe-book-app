import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router";

function Favorites({ favorites, onToggleFavorite }) {
  return (
    <div className="recipe-list">
      <div className="empty-list-container">
        {favorites.length === 0 && <h1 className="empty-list">Empty List</h1>}
        {favorites.length === 0 &&  <Link to="/"> 🔙 Home Page</Link>}
      </div>
      {favorites.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={true}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default Favorites;
