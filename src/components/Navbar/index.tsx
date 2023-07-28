import styles from "./Navbar.module.scss";
import navBarList from "../../data/nav";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={`${styles["navbar"]}`}>
      <ul className={styles["navbar-list"]}>
        {navBarList.map((item) => (
          <li key={item.path}>
            <Link className={styles['link']} to={item.path}>{item.icon} <span className={styles['link-label']}>{item.title}</span></Link>
          </li>
        ))} 
      </ul>
    </nav>
  );
};
