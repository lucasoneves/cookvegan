import { useState, useEffect } from "react";
import { RecipeCard } from "../RecipeCard";
import { Link } from "react-router-dom";

import styles from "./RecipeList.module.scss";

type RecipeItem = {
  id: string;
  title: string;
  duration: number;
  thumb: string;
};

export const RecipeList = ({ titleList }: { titleList: string }) => {
  const [recipeData, setRecipeData] = useState<RecipeItem[]>([]);

  useEffect(() => {
    getRecipeData();
  }, []);

  async function getRecipeData() {
    try {
      const response = await fetch(
        "https://647698799233e82dd53a29b1.mockapi.io/recipes"
      );
      const data = await response.json();
      console.log(data);
      setRecipeData(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={`${styles["wrapper"]} mb-20`}>
      <h2 className={styles["title-list"]}>{titleList}</h2>
      <div className={styles["recipe-list"]}>
        {recipeData.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              duration={`${new Date(recipe.duration).getMinutes()} minutes`}
              altImg={recipe.title}
              thumb={recipe.thumb}
            />
          );
        })}
      </div>
      <Link
        className={` bg-blue-800 p-5 rounded-lg text-white max-w-xs m-auto flex justify-center`}
        to="/recipes"
      >
        See all recipes
      </Link>
    </div>
  );
};
