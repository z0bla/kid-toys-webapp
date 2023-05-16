import React from "react";

import "./App.css";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";

function App(): JSX.Element {
  return (
    <>
      <Layout>
        <LandingPage />
      </Layout>
    </>
  );
}

export default App;
