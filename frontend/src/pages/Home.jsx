import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "@pages/LandingPage";
import AccueilAsso from "@pages/AccueilAsso";
import AccueilIntervenant from "@pages/AccueilIntervenant";

import FormAsso from "@pages/FormAsso";
import FormAssoContact from "@pages/FormAssoContact";
import FormInterv from "@pages/FormInterv";

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
        <Routes>
          <Route path="/AccueilAssociation" element={<AccueilAsso />} />
          <Route path="/FormulaireIntervenant" element={<FormInterv />} />
          <Route path="/AccueilIntervenant" element={<AccueilIntervenant />} />
          <Route
            path="/FormulaireContactAssociation"
            element={<FormAssoContact />}
          />
          <Route path="/FormulaireAssociation" element={<FormAsso />} />
          <Route path="/*" element={<LandingPage />} />
          <Route
            path="/MissionValideesIntervenant"
            element={<ValidatedMissions />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
