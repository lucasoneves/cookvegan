import "./assets/css/App.scss";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RecipeList } from "./components/RecipeList";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <>
      <Header logo="Cook Vegan" />
      <Hero description="Experimente novos sabores através de receitas veganas">
        <SearchBar title="Procure uma receita"></SearchBar>
      </Hero>
      <div className="container">
        <RecipeList titleList="Adicionadas recentemente:" />
      </div>
      <Footer />
    </>
  );
}

export default App;
