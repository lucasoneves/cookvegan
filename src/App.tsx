import "./assets/css/App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RecipeList } from "./components/RecipeList";
import { SearchBar } from "./components/SearchBar";
import { SectionWhyVegan } from "./components/SectionWhyVegan";
import { useEffect, useState } from "react";
import { getCategories } from "./lib/sanity";
import { CategoryTypes } from "./components/Category";
import SectionCategories from "./components/SectionCategories";

function App() {
  useEffect(() => {
    getCategoryData();
  }, []);
  async function getCategoryData() {
    const data = await getCategories();
    setCategories(data);
  }

  const [categories, setCategories] = useState<CategoryTypes[]>([]);

  return (
    <>
      <Header logo="Cook Vegan" />
      <Hero>
        <h2>
          Try new flavors through <strong>vegan recipes</strong>
        </h2>
        <SearchBar title="Look for a recipe"></SearchBar>
      </Hero>
      <div className="container">
        <RecipeList titleList="Recently added:" />
      </div>
      <SectionWhyVegan />
      <SectionCategories categories={categories} />
      <Footer />
    </>
  );
}

export default App;
