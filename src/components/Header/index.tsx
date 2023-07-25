import { Navbar } from "../Navbar";
import styles from "./Header.module.scss";
import OpenMenuMobile from "../OpenMenuMobile";
import { useState } from "react";
// import PropTypes from 'prop-types'

type HeaderProps = {
  logo: string;
};


export const Header = ({ logo }: HeaderProps) => {
  
  const [menuMobile, setMenuMobileVisible] = useState(false);

  function handleMenuMobile() {
    setMenuMobileVisible(true);
  }

  return (
    <header className={styles["header"]}>
      <div className={`${styles["container"]} container`}>
        <h1>{logo}</h1>
        <OpenMenuMobile clickEvent={handleMenuMobile} />
        <Navbar isMobile={menuMobile} />
      </div>
    </header>
  );
};
