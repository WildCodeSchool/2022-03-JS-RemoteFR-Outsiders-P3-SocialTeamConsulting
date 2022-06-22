import React, { createContext, useState } from "react";
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
import BackOfficeAdminMissionValidation from "@components/BackOfficeAdminMissionValidation";

import ValidatedMissions from "@components/ValidatedMissions";

import "@style/App.css";


function App() {


  return (
 
      <div className="App">
        <Routes>
          <Route path="/back_office" element={<BackOffice />}>
            <Route index element={<ProfilInterv />} />
            <Route
              path="modification_profil_intervenant"
              element={<ProfilInterv />}
            />
            <Route
              path="validation_mission"
              element={<BackOfficeAdminMissionValidation />}
            />
          </Route>
          <Route path="/" element={<Home />}>
            <Route index element={<LandingPage />} />
            <Route path="accueil_association" element={<AccueilAsso />} />
            <Route path="formulaire_association" element={<FormAsso />} />
            <Route
              path="formulaire_conact_association"
              element={<FormAssoContact />}
            />
            <Route
              path="accueil_intervenant"
              element={<AccueilIntervenant />}
            />
            <Route path="formulaire_intervenant" element={<FormInterv />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
  
  );
}

export default App;
