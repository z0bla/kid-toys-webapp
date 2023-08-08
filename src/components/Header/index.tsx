import React from "react";

import Logo from "../Logo";
import NavBar from "../NavBar";
import Search from "../Search";
import SiteActions from "../SiteActions";
import styles from "./Header.module.css";

function Header(): JSX.Element {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <Search />
      <SiteActions />
      <NavBar />
    </div>
  );
}
export default Header;
