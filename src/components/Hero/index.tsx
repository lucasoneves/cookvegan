import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <article className={styles["hero"]}>
      <div className={styles['container']}>
        <h2>Descubra novas receitas e sabores, em versões veganas.</h2>
      </div>
    </article>
  );
};
