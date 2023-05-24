import "./assets/css/App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RecipeCard } from "./components/RecipeCard";

function App() {
  return (
    <>
      <Header logo="CookVegan" />
      <Hero />
      <div className="container">
        <RecipeCard
          title="Couve Flor empanada"
          duration="30 min."
          altImg="Gril chicken"
          thumb=""
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
