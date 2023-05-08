import React from "react";

import styles from "./Header.module.css";
import logo from "./logoForHeader.png";

function Header(): JSX.Element {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.logoAndName}>
          <img className={styles.logoImg} src={logo} alt="img" />
          <h1 className={styles.nameOfPage}>Kid Toys</h1>
        </div>
        <nav className={styles.navBarHeader}>
          <ul className={styles.list}>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Catalog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
