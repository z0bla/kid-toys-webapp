import React, { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

import styles from "./NavBar.module.css";

export default function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleShowNavBar = () => {
    console.log("navbar menu clicked");
    setShowNavBar((isShown) => !isShown);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navIcon} onClick={handleShowNavBar}>
        <IoMenuOutline />
      </div>
      <div className={`${styles.navMenu} ${showNavBar ? styles.active : ""}`}>
        <div className={styles.closeButton} onClick={handleShowNavBar}>
          <IoCloseOutline />
        </div>
        <ul>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
          <li>
            <a href="#">Toys</a>
          </li>{" "}
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Puzzles</a>
          </li>
          <li>
            <a href="#">Outdoor</a>
          </li>
          <li>
            <a href="#">Pre-School</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
