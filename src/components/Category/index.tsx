import styles from "./Category.module.scss";
import { useEffect, useState } from "react";
import { getCategories, client } from "../../lib/sanity.ts"

type CategoryTypes = {
  path: string;
  name: string;
  thumb: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

export const Category = () => {
  useEffect(() => {
    getCategoryData();
  }, []);

  async function getCategoryData() {
    const data = await getCategories();
    setCategories(data);
  }
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  return (
    <section className={styles["category"]}>
      <div className="container">
        <h2 className={styles["title"]}>Categories</h2>
        <ul className={styles["category-list"]}>
          {categories?.map((category) => (
            <li key={category.path} className={styles["category-list--item"]}>
              <img
                src={category.thumb.asset._ref}
                alt={category.name}
                className={styles["category-list--thumb"]}
              />
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

export default Category;