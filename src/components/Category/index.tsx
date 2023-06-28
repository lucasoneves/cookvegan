import styles from "./Category.module.scss";
// import mealImage from '@/assets/images/thumb-meals.jpg';
import { categoriesData } from "../../data/categories";
import { useState } from "react";

export const Category = () => {
  const [categories, _] = useState(categoriesData);
  return (
    <section className={styles["category"]}>
      <div className="container">
        <h2 className={styles["title"]}>Categories</h2>
        <ul className={styles["category-list"]}>
          {categories?.map((category) => (
            <li key={category.id} className={styles["category-list--item"]}>
              <img src={category.thumb} alt={category.thumb} className={styles['category-list--thumb']} />
              <div className={styles["link"]}>
                <a href={category.path}>{category.name}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
