import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

import styles from "./Header.module.css";
import logo from "./kid-toys-logo.svg";

function Header(): JSX.Element {
  const [showMenu, setShowNMenu] = useState(false);

  const toggleMenu = () => {
    setShowNMenu(!showMenu);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logoImg} />
        <h2 className={styles.logoText}>Kid Toys</h2>
      </div>
      <nav
        className={styles.navigation}
        id={showMenu ? styles.mobileNavLinks : styles.hideMobileNavLinks}
      >
        <a href="#" className={styles.navBtn}>
          Home
        </a>
        <a href="#" className={styles.navBtn}>
          Contact
        </a>
        <a href="#" className={styles.navBtn}>
          About Us
        </a>
        <button className={`${styles.btnLogin} ${styles.navBtn}`}>
          Log in
        </button>
        <button className={`${styles.btnRegister} ${styles.navBtn}`}>
          Register
        </button>
      </nav>
      <div className={styles.meniBarIcon} onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="blueviolet" size={30} />
        ) : (
          <AiOutlineBars color="blueviolet" size={27} />
        )}
      </div>
    </div>
  );
}
export default Header;
