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
import ValidatedMissions from "@components/ValidatedMissions";

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
          <Route path="/accueil_association" element={<AccueilAsso />} />
          <Route path="/formulaire_intervenant" element={<FormInterv />} />
          <Route path="/accueil_intervenant" element={<AccueilIntervenant />} />
          <Route
            path="/formulaire_contact_association"
            element={<FormAssoContact />}
          />
          <Route path="/formulaire_association" element={<FormAsso />} />
          <Route path="/*" element={<LandingPage />} />
          <Route
            path="/mission_validees_intervenant"
            element={<ValidatedMissions />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
