import React from "react";
import { CiShoppingCart } from "react-icons/ci";

import styles from "./SiteActions.module.css";

export default function SiteActions() {
  return (
    <div className={styles.siteActions}>
      <a href="#">Account</a>
      <CiShoppingCart fontSize={24} />
    </div>
  );
}
