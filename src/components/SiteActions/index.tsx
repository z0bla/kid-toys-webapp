import React from "react";
import { IoCartOutline } from "react-icons/io5";

import styles from "./SiteActions.module.css";

export default function SiteActions() {
  return (
    <div className={styles.siteActions}>
      <a href="#">Account</a>
      <IoCartOutline />
    </div>
  );
}
