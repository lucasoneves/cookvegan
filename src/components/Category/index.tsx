import styles from "./Category.module.scss";
import { useEffect, useState } from "react";
import { getCategories, client } from "../../lib/sanity.ts"
import imageUrlBuilder from '@sanity/image-url'
import { Link } from "react-router-dom";

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

type ThumbType = {
  _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
}

const builder = imageUrlBuilder(client)

function urlFor(source: ThumbType) {
  return builder.image(source)
}

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
            <Link to={category.path}>
            <li key={category.path} className={styles["category-list--item"]}>
              <div className={styles["link"]}>
                <a href={category.path}>{category.name}</a>
              </div>
              <img
                src={urlFor(category.thumb).url()}
                alt={category.name}
                className={styles["category-list--thumb"]}
              />
            </li></Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;