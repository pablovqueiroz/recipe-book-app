import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

function HomePage({
  recipes,
  favorites,
  onToggleFavorite,
  searchTerm,
  onSearchChange,
}) {
  return (
    <>
      <div className="container">
        <SearchBar value={searchTerm} onChange={onSearchChange} />
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
