import React from "react";

import styles from "./Footer.module.css";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <small>owned by SyntaxError company limited © 2023</small>
    </footer>
  );
}

export default Footer;
