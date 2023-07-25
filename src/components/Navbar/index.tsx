import styles from "./Navbar.module.scss";
import navBarList from "../../data/nav";
import { Link } from "react-router-dom";

export const Navbar = ({isMobile}: {isMobile: boolean}) => {
  return (
    <nav className={`${styles["navbar"]} ${isMobile ? styles['active'] : '' } }`}>
      <ul className={styles["navbar-list"]}>
        {navBarList.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
