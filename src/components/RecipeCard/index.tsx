import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.scss";
import { MdFavoriteBorder } from 'react-icons/md';


export const RecipeCard = ({
  title,
  thumbnail,
  altImg,
  slug
}: {
  title: string;
  thumbnail: string;
  altImg: string;
  slug: string;
}) => {
  return (
    <div className={styles["recipe-card"]}>
      <Link to={`/recipe/${slug}`}>
        <div className={styles["recipe-card__thumb"]}>
          {thumbnail && <img src={thumbnail} alt={altImg} />}
        </div>
        <div className={styles['recipe-card__content']}>
          <span className={styles["recipe-card__info--title"]}>{title}</span>
          <div className={styles["recipe-card__info"]}>
            <span className={styles["recipe-card__info--favorite"]}>
              <MdFavoriteBorder />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
