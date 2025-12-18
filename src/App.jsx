import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import NotFound from "./pages/NotFoundPage";
import Favorites from "./pages/FavoritesPage";
import Profile from "./pages/ProfilePage";
import Sidebar from "./components/Sidebar";
import LoginModal from "./pages/LoginPage";
import CreateProfile from "./pages/CreateProfilePage";
import ContactPage from "./pages/ContactPage";
import RecipeDetailsPage from "./pages/RecipesDetailsPage";
import CollaboratePage from "./pages/CollaboratePage";
import recipesData from "./recipesData";
import "./App.css";

function App() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const isLoginPage = location.pathname === "/sign-login";
  const shouldRenderPageContent = !isLoginPage;
  //  const [recipes, setRecipes] = useState(recipesData);
    // const [favorites, setFavorites] = useState([]);

  // favorites

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {
    setFavorites((prev) =>
      prev.some((r) => r.id === recipe.id)
        ? prev.filter((r) => r.id !== recipe.id)
        : [...prev, recipe]
    );
    // console.log("Favorite Button clicked")
  };

  //profile

  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem("profileData");
    return stored ? JSON.parse(stored) : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    return storedLogin === "true";
  });

  useEffect(() => {
    if (profile) {
      localStorage.setItem("profileData", JSON.stringify(profile));
    } else {
      localStorage.removeItem("profileData");
    }
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);

  const handleSaveProfile = (newProfile) => {
    setProfile(newProfile);
  };

  const handleDeleteProfile = () => {
    setProfile(null);
    setIsLoggedIn(false);
  };

  const handleLogin = (username, password) => {
    if (
      (profile && username === profile.username && password) ||
      (profile && username === profile.email && password)
    ) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  //add recipes

  const handleAddRecipe = (newRecipe) => {
    setRecipes((remainingRecipes) => [newRecipe, ...remainingRecipes]);
  };

  //delte recipes
  const handleDeleteRecipe = (recipe_id) => {
    setRecipes((remainingRecipes) =>
      remainingRecipes.filter((recipe) => recipe.id !== recipe_id)
    );
    console.log("deleted", recipe_id);
  };

  //update recipes
  const handleUpdateRecipe = (updatedRecipe) => { 
    setRecipes((remainingRecipes) => 
      remainingRecipes.map((recipe) => 
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };


    const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (term) => {
    console.log("handleSearchChange ->", term);
    setSearchTerm(term);
  };

  
  //searchbar

  const [recipes, setRecipes] = useState(recipesData);

  const filteredRecipes = (() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return recipes;
    return recipes.filter((recipe) => {
      const name = (recipe.name || "").toLowerCase();// por nome
      const type = (recipe.type || "").toLowerCase();// por tipo
      const ingredients = (recipe.ingredients || []).join(" ").toLowerCase();//por ingredientes
      const instructions = (recipe.instructions || "").toLowerCase();// por instrucoes
      return (
        name.includes(query) ||
        type.includes(query) ||
        ingredients.includes(query) ||
        instructions.includes(query)
      );
    });
  })();


  // END OF javaScrip Land
  return (
    <>
      {shouldRenderPageContent && (
        <Navbar
          openLoginModal={openModal}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
      )}

      <div className="master">
        <Sidebar />
        <main className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  recipes={filteredRecipes}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                />
              }
            />
            <Route
              path="/Favorites"
              element={
                <Favorites
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/ProfilePage"
              element={
                <Profile
                  profile={profile}
                  isLoggedIn={isLoggedIn}
                  openLoginModal={openModal}
                />
              }
            />
            <Route
              path="/CreateProfile"
              element={
                <CreateProfile
                  profile={profile}
                  onSaveProfile={handleSaveProfile}
                  onDeleteProfile={handleDeleteProfile}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetailsPage />} />
            <Route
              path="/collaborate"
              element={
                <CollaboratePage
                  recipes={recipes}
                  onAddRecipe={handleAddRecipe}
                  onUpdateRecipe={handleUpdateRecipe}
                  onDeleteRecipe={handleDeleteRecipe}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route path="/Contactpage" element={<ContactPage />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>
      </div>

      {shouldRenderPageContent && <Footer />}

      {isModalOpen && (
        <LoginModal
          onClose={closeModal}
          onLogin={handleLogin}
          isLoggedIn={isLoggedIn}
        />
      )}
    </>
  );
}
export default App;
