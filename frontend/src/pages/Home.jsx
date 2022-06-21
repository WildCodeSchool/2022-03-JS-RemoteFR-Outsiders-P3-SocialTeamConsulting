import React, { useState } from "react";
import { Outlet } from "react-router-dom";

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
      <div className="app-main-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
