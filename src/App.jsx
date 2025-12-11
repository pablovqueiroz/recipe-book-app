import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import "./App.css";
import { useState } from "react";
import Home from "./assets/pages/HomePage";
import About from "./assets/pages/AboutPage";
import NotFound from "./assets/pages/NotFoundPage";
import Recipes from "./assets/pages/RecipesDetailsPage";
import Favorites from "./assets/pages/Favorites";

function App() {
  const [recipes, setRecipes] = useState(RecipeList);
  return (
    <>
      <Navbar />
      <div className="master">
        <main className="container">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/About" element={<About />} />
            <Route path="/Recipes/:recipesId" element={<Recipes />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route ---------------way to the recipes
            path="/pet-detail/:petId"
            element={<PetDetailPage petState={petState} />}
          /> */}
          </Routes>
          <section className="content">
            <RecipeList />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
