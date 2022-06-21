import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "@pages/Home";
import BackOffice from "@pages/BackOffice";
import LandingPage from "@pages/LandingPage";
import AccueilAsso from "@pages/AccueilAsso";
import AccueilIntervenant from "@pages/AccueilIntervenant";

import FormAsso from "@pages/FormAsso";
import FormAssoContact from "@pages/FormAssoContact";
import FormInterv from "@pages/FormInterv";
import ProfilInterv from "@components/ProfilInterv";

import ValidatedMissions from "@components/ValidatedMissions";

import "@style/App.css";
import PostMission from "@pages/PostMission";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/back_office" element={<BackOffice />}>
          <Route index element={<ValidatedMissions />} />
          <Route
            path="modification_profil_intervenant"
            element={<ProfilInterv />}
          />
          <Route path="post_mission" element={<PostMission />} />
        </Route>
        <Route path="/" element={<Home />}>
          <Route index element={<LandingPage />} />
          <Route path="accueil_association" element={<AccueilAsso />} />
          <Route path="formulaire_association" element={<FormAsso />} />
          <Route
            path="formulaire_contact_association"
            element={<FormAssoContact />}
          />
          <Route path="accueil_intervenant" element={<AccueilIntervenant />} />
          <Route path="formulaire_intervenant" element={<FormInterv />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
