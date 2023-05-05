import React from "react";

import Footer from "../Footer";
import Header from "../Header";

//import styles from "./Layout.module.css";

type landingPageProps = {
  children: React.ReactNode;
};

const Layout = (props: landingPageProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
