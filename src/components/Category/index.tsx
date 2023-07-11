import styles from "./Category.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";
import { client } from "../../lib/sanity";

export type CategoryTypes = {
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
};

const builder = imageUrlBuilder(client);

function urlFor(source: ThumbType) {
  return builder.image(source);
}

export const Category = ({ path, name, thumb }: CategoryTypes) => {
  return (
    <Link to={`categories/${path}`}>
      <li key={path} className={styles["category-list--item"]}>
        <div className={styles["link"]}>
          <a href={path}>{name}</a>
        </div>
        <img
          src={urlFor(thumb).url()}
          alt={name}
          className={styles["category-list--thumb"]}
        />
      </li>
    </Link>
  );
};

export default Category;
