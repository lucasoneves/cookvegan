import { Navbar } from "../Navbar";
import styles from "./Header.module.scss";

type HeaderProps = {
  logo: string;
};


export const Header = ({ logo }: HeaderProps) => {

  return (
    <header className={styles["header"]}>
      <div className={`${styles["container"]} container`}>
        <h1>{logo}</h1>
        <Navbar />
      </div>
    </header>
  );
};
