import { useState } from "react";
import styles from "./Footer.module.scss";
import navData from "../../data/nav";
import { Link } from "react-router-dom";

type Navigation = {
  title: string;
  path: string;
};

export const Footer = () => {
  const [menu, _] = useState<Navigation[]>(navData);
  return (
    <footer className={styles["footer"]}>
      <div className={styles['container']}>
        <div className={styles['sitemap']}>
          <h2>CookVegan</h2>
          <nav>
            <ul>
              {menu.map((item) => (
                <li key={item.path}><Link to={item.path}>{item.title}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <span>Todos os direitos reservados - 2023</span>
      </div>
    </footer>
  );
};
