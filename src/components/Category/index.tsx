import styles from "./Category.module.scss";
import mealImage from '@/assets/images/thumb-meals.jpg';

export const Category = () => {
  return (
    <section className={styles["category"]}>
      <div className="container">
        <h2 className={styles["title"]}>Categories</h2>
        <ul className={styles["category-list"]}>
          <li className={styles["category-list--item"]} style={{ backgroundImage: `url(${mealImage})` }}>
            <div className={styles["link"]}>
              <a href="#">Salads</a>
            </div>
          </li>
          <li className={styles["category-list--item"]}>
            <div className={styles["link"]}>
              <a href="#">Cakes</a>
            </div>
          </li>
          <li className={styles["category-list--item"]}>
            <div className={styles["link"]}>
              <a href="#">Meals</a>
            </div>
          </li>
          <li className={styles["category-list--item"]}>
            <div className={styles["link"]}>
              <a href="#">Desserts</a>
            </div>
          </li>
          <li className={styles["category-list--item"]}>
            <div className={styles["link"]}>
              <a href="#">Protein</a>
            </div>
          </li>
          <li className={styles["category-list--item"]}>
            <div className={styles["link"]}>
              <a href="#">Snacks</a>
            </div>
          </li> 
        </ul>
      </div>
    </section>
  );
};
