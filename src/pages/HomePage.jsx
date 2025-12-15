import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import recipesData from "../recipesData";

function HomePage({ recipes, favorites, onToggleFavorite }) {
  return (
    <>
      <div className="container">
        <SearchBar />
        <RecipeList
          recipes={recipes}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </>
  );
}

export default HomePage;
