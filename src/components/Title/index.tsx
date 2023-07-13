import styles from "./TitleSection.module.scss";

export const TitleSection = ({children}: { children: string}) => {
  return <h2 className={styles['title-section']}>{children}</h2>
}