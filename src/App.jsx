import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import NotFound from "./pages/NotFoundPage";
import Recipes from "./pages/RecipesDetailsPage";
import Favorites from "./pages/Favorites";
import Profile from "./pages/ProfilePage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./components/Sidebar";

function App() {
  const [recipes, setRecipes] = useState(RecipeList);
  const location = useLocation();
  const isLoginPage = location.pathname === "/sign-login";
  return (
    <>
    {!isLoginPage}
    <Navbar />
      <div className="master">
        <Sidebar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/About" element={<About />} />
            <Route path="/Recipes/:recipesId" element={<Recipes />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route ---------------way to the recipes
            path="/pet-detail/:petId"
            element={<PetDetailPage petState={petState} />}
          /> */}
          </Routes>
          <section className="content">
            <div></div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
