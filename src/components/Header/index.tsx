import { Navbar } from "../Navbar";
import styles from "./Header.module.scss";
// import PropTypes from 'prop-types'

type HeaderProps = {
  logo: string;
}

export const Header = ({ logo } : HeaderProps) => {
  return (
    <header className={styles["header"]}>
      <div className={styles['container']}>
        <h1>{logo}</h1>
        <Navbar />
      </div>
    </header>
  );
};
