import styles from "./SectionWhyVegan.module.scss";

export const SectionWhyVegan = () => {
  return (
    <section className={styles["section-vegan"]}>
      <div className={styles["mask"]}></div>
      <div className="container">
        <div className={styles['content']}>
          <h2>Why vegan?</h2>
          <ul>
            <li><span>ícone</span><span>texto</span></li>
            <li><span>ícone</span><span>texto</span></li>
            <li><span>ícone</span><span>texto</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};
