import { Navbar } from "../Navbar";
import styles from "./Header.module.scss";

export const Header = ({ logo }: { logo: string }) => {
  return (
    <header className={styles["header"]}>
      <div className={styles['container']}>
        <h1>{logo}</h1>
        <Navbar />
      </div>
    </header>
  );
};
