import { TitleSection } from "../Title";
import styles from "./SectionWhyVegan.module.scss";

export const SectionWhyVegan = () => {
  return (
    <section className={styles["section-vegan"]}>
      <div className={styles["mask"]}></div>
      <div className="container">
        <div className={styles["content"]}>
          <TitleSection>Why vegan?</TitleSection>
          <ul className={styles["list-reason-vegan"]}>
            <li>
              <span className={styles["list-reason-vegan--icon"]}>1</span>
              <h3>Animals</h3>
              <p>
                Being vegan is a way to <strong>respect and protect the lives of
                animals</strong>, avoiding their suffering and death in the name of food.
              </p>
            </li>
            <li>
              <span className={styles["list-reason-vegan--icon"]}>2</span>
              <h3>Environment</h3>
              <p>
                Going vegan helps save the planet by <strong>reducing deforestation,
                pollution, and greenhouse gas emissions</strong> linked to animal
                agriculture.
              </p>
            </li>
            <li>
              <span className={styles["list-reason-vegan--icon"]}>3</span>
              <h3>Health and wellbeing</h3>
              <p>
                A vegan diet promotes better health, lowering the risk of <strong>heart
                disease, diabetes, and certain cancers</strong>, while providing abundant
                nutrients and fiber.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
