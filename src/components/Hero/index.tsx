import React from "react";
import styles from "./Hero.module.scss";

type HeroSectionProps = {
  description: string;
  children: React.ReactNode
};

export const Hero = ({ description, children }: HeroSectionProps) => {
  return (
    <article className={styles["hero"]}>
      <div className={styles['hero-wrapper']}>
        <div className={styles["container"]}>
          <h2>{description}</h2>
          {children}
        </div>
      </div>
    </article>
  );
};
