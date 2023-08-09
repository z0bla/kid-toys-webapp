import React from "react";

import styles from "./Logo.module.css";
import logo from "./kid-toys-logo.svg";

type VariantType = "dark" | "light";

type LogoProps = {
  variant: VariantType;
};

export default function Logo({ variant }: LogoProps) {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} className={styles.logoImg} />
      <h2
        className={`${styles.logoText} ${
          variant === "dark" ? styles.logoTextDark : ""
        } ${variant === "light" ? styles.logoTextLight : ""}`}
      >
        Kid Toys
      </h2>
    </div>
  );
}
