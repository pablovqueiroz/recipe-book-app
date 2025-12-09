import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RecipeCard from "./components/RecipeCard";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <section className="App">
          {/* {RecipeCard.map((card, index) => (
          <RecipeCard key={index} card={card} />
        ))} */}
         <Navbar />
        </section>

        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
