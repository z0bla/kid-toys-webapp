import React from "react";

import styles from "./Header.module.css";

function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <h1>Kid Toyz</h1>
      <nav>
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
  );
}
export default Header;
