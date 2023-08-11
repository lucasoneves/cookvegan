import { useState, useEffect } from "react";
import { RecipeCard } from "../RecipeCard";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { ThumbType } from "../../lib/types/thumb";
import { client, getRecentRecipes } from "../../lib/sanity";
import styles from "./RecipeList.module.scss";
import { RecipeType } from "../../lib/types/recipe";
import { getRecipes } from "../../lib/sanity";

export const RecipeList = ({ titleList, page }: { page: boolean, titleList: string }) => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    getRecipesData();
  }, [])
  const builder = imageUrlBuilder(client);
  function urlFor(source: ThumbType) {
    return builder.image(source);
  }
  async function getRecipesData() {
    const route = page == true ? getRecipes() : getRecentRecipes();
    const data = await route;
    setRecipes(data);
  }
  return (
    <div className={`${styles["wrapper"]} mb-20`}>
      {titleList && <h2 className={styles["title-list"]}>{titleList}</h2>}
      <div className={styles["recipe-list"]}>
        {recipes.map((item => {
          return (<RecipeCard
            key={item.name}
            title={item.name}
            altImg={item.name}
            thumbnail={urlFor(item.thumbnail).url()}
          />)
        }))}
        
      </div>
      {window.location.pathname != '/recipes' && <Link
        className={` bg-blue-800 p-5 rounded-lg text-white max-w-xs m-auto flex justify-center`}
        to="/recipes"
      >
        See all recipes
      </Link>} 
    </div>
  );
};
