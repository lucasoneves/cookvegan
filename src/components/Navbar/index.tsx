import styles from "./Navbar.module.scss";
import navBarList from "../../data/nav";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbar-list"]}>
        {navBarList.map((item) => (
          <li key={item.path}>
            <Link to={`/${item.path}`}>{ item.title }</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
