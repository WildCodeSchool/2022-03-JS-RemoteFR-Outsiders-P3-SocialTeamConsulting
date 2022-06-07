import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import LandingPage from "@pages/LandingPage";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

import "@style/App.css";

function App() {
  const [isLinkVisible, setIsLinkVisible] = useState(false);
  const showLink = (isVisible) => {
    setIsLinkVisible(isVisible);
  };
  const [isFormVisible, setIsFormVisible] = useState(false);
  const showForm = (isVisible) => {
    setIsFormVisible(isVisible);
  };

  return (
    <div className="App">
      <NavBar
        isLinkVisible={isLinkVisible}
        showLink={showLink}
        isFormVisible={isFormVisible}
        showForm={showForm}
      />
      <div
        className="app-main-container"
        role="button"
        tabIndex={0}
        onClick={() => {
          showForm(false);
          showLink(false);
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
