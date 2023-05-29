import styles from "./Hero.module.scss";

type HeroSectionProps = {
  description: string;
};

export const Hero = ({ description }: HeroSectionProps) => {
  return (
    <article className={styles["hero"]}>
      <div className={styles['hero-wrapper']}>
        <div className={styles["container"]}>
          <h2>{description}</h2>
        </div>
      </div>
    </article>
  );
};
