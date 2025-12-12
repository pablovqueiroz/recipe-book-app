import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
function HomePage() {
  return (
    <>
      
      <div className="container">
        <SearchBar />
        <RecipeList />
      </div>
    </>
  );
}

export default HomePage;
