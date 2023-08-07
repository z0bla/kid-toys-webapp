import React, { useState } from "react";
import { CiCircleRemove, CiMenuBurger } from "react-icons/ci";

import styles from "./NavBar.module.css";

export default function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleShowNavBar = () => {
    console.log("navbar menu clicked");
    setShowNavBar((isShown) => !isShown);
  };

  return (
    <nav>
      <div className={styles.navIcon} onClick={handleShowNavBar}>
        <CiMenuBurger />
      </div>
      <div className={`${styles.navMenu} ${showNavBar ? styles.active : ""}`}>
        <div className={styles.closeButton} onClick={handleShowNavBar}>
          <CiCircleRemove />
        </div>
        <ul>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
          <li>
            <a href="#">Action Figures and Vehicles</a>
          </li>
          <li>
            <a href="#">Dolls</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Make and Create</a>
          </li>
          <li>
            <a href="#">Outdoor</a>
          </li>
          <li>
            <a href="#">Pre-School</a>
          </li>
          <li>
            <a href="#">Puzzles</a>
          </li>
          <li>
            <a href="#">Soft Toys</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
