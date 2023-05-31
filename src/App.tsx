import "./assets/css/App.scss";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RecipeList } from "./components/RecipeList";
import { RecipeCard } from "./components/RecipeCard";

function App() {
  return (
    <>
      <Header logo="Cook Vegan" />
      <Hero description="Experimente novos sabores através de receitas veganas" />
      <div className="container">
        <RecipeList />
      </div>
      <Footer />
    </>
  );
}

export default App;
