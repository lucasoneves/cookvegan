import styles from "./RecipeCard.module.scss";

export const RecipeCard = ({
  title,
  duration,
  thumb,
  altImg,
}: {
  title: string;
  duration: string;
  thumb: string;
  altImg: string;
}) => {
  return (
    <div className={styles["recipe-card"]}>
      <div className={styles["recipe-card__thumb"]}>
        {thumb && <img src={thumb} alt={altImg} />}
      </div>
      <div className={styles['recipe-card__content']}>
        <span className={styles["recipe-card__info--title"]}>{title}</span>
        <div className={styles["recipe-card__info"]}>
          <span className={styles["recipe-card__info--duration"]}>
            {duration}
          </span>
          <span className={styles["recipe-card__info--favorite"]}>
            favoritar
          </span>
        </div>
      </div>
    </div>
  );
};
