import "./assets/css/App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RecipeCard } from "./components/RecipeCard";

function App() {
  return (
    <>
      <Header logo="Cook Vegan" />
      <Hero description="Experimente novos sabores através de receitas veganas" />
      <div className="container">
        <div className="recipe-list">
          <RecipeCard
            title="Couve Flor empanada"
            duration="30 min."
            altImg="Gril chicken"
            thumb=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
