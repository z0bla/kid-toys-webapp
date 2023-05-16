import React from "react";

import Footer from "../Footer";
import Header from "../Header";

//import styles from "./Layout.module.css";

type landingPageProps = {
  children: React.ReactNode;
};

function Layout(props: landingPageProps): JSX.Element {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
