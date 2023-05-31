import { useState, useEffect } from 'react';
import { RecipeCard } from '../RecipeCard';

import styles from './RecipeList.module.scss';

export const RecipeList = () => {
  const [recipeData, setRecipeData] = useState([]);

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
    <div className={styles['recipe-list']}>
      {recipeData.map((recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            duration={`${new Date(recipe.duration).getMinutes()} minutos`}
            altImg={recipe.title}
            thumb={recipe.thumb}
          />
        );
      })}
    </div>
  );
};
