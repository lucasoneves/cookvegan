import React from "react";
import styles from "./Hero.module.scss";

type HeroSectionProps = {
  children: React.ReactNode
};

export const Hero = ({ children }: HeroSectionProps) => {
  return (
    <article className={`${styles["hero"]} mb-10`}>
      <div className={styles['hero-wrapper']}>
        <div className={styles["container"]}>
          {children}
        </div>
      </div>
    </article>
  );
};
