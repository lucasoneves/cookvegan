import styles from "./TitleSection.module.scss";

export const TitleSection = ({children}: { children: string}) => {
  return <h2 className={`${styles['title-section']} pt-4 pb-4 sm:pb-10 sm:pt-10`}>{children}</h2>
}