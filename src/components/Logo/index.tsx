import React from "react";

import styles from "./Logo.module.css";
import logo from "./kid-toys-logo.svg";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} className={styles.logoImg} />
      <h2 className={styles.logoText}>Kid Toys</h2>
    </div>
  );
}
