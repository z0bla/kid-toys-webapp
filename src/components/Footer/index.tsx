import React from "react";

import styles from "./Footer.module.css";

function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <small>owned by SyntaxError company limited © {year}</small>
    </footer>
  );
}

export default Footer;
