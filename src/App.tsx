import React from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <LandingPage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
