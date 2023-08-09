import React from "react";

import Logo from "../Logo";
import styles from "./Footer.module.css";

function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <Logo />
        <p className={styles.footerAbout}>
          Spark laughter, learning, and endless fun with our enchanting range of
          kid&apos;s toys that inspire imagination and bring joy to every moment
        </p>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
