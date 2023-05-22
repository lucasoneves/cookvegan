import "./assets/css/App.css";
import { Header } from "./components/Header";
import { RecipeCard } from "./components/RecipeCard";

function App() {
  return (
    <>
      <Header logo="CookVegan" />
      <RecipeCard
        title="Couve Flor empanada"
        duration="30 min"
        altImg="Gril chicken"
        thumb="https://i.ytimg.com/vi/1onqvN1rNUU/maxresdefault.jpg"
      />
    </>
  );
}

export default App;
