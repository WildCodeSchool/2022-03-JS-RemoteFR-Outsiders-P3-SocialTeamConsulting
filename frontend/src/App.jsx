import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "@pages/Home";
import BackOffice from "@pages/BackOffice";
import LandingPage from "@pages/LandingPage";
import AccueilAsso from "@pages/AccueilAsso";
import AccueilIntervenant from "@pages/AccueilIntervenant";
import PostMission from "@pages/PostMission";

import FormAsso from "@pages/FormAsso";
import FormAssoContact from "@pages/FormAssoContact";
import FormInterv from "@pages/FormInterv";
import ProfilAdmin from "@components/ProfilAdmin";
import ProfilInterv from "@components/ProfilInterv";
import ProfilAsso from "@components/ProfilAsso";
import BacklogValidatedMissions from "@components/BacklogValidatedMissions";
import HistoryMissions from "@components/HistoryMissions";
import BackOfficeAdminMissionValidation from "@components/BackOfficeAdminMissionValidation";
import ValidatedMissions from "@components/ValidatedMissions";
import BackOfficeAdminInterValidation from "@components/BackOfficeAdminInterValidation";
import BackOfficeMissionsDisponibles from "@components/BackOfficeMissionsDisponibles";
import BackOfficeAdminMissionTerminee from "@components/BackOfficeAdminMissionTerminee";
import BackOfficeListeUsers from "@components/BackOfficeListeUsers";

import "@style/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/back_office" element={<BackOffice />}>
          <Route index element={<HistoryMissions />} />
          <Route
            path="modification_profil_intervenant"
            element={<ProfilInterv />}
          />
          <Route
            path="modification_profil_association"
            element={<ProfilAsso />}
          />
          <Route
            path="modification_profil_administrateur"
            element={<ProfilAdmin />}
          />
          <Route path="post_mission" element={<PostMission />} />
          <Route path="validated_mission" element={<ValidatedMissions />} />
          <Route
            path="missions_disponibles"
            element={<BackOfficeMissionsDisponibles />}
          />
          <Route
            path="backlog_validated_missions"
            element={<BacklogValidatedMissions />}
          />

          <Route
            path="validation_mission"
            element={<BackOfficeAdminMissionValidation />}
          />
          <Route
            path="validation_intervenant"
            element={<BackOfficeAdminInterValidation />}
          />
          <Route path="historique_missions" element={<HistoryMissions />} />
          <Route
            path="terminer_mission"
            element={<BackOfficeAdminMissionTerminee />}
          />
          <Route
            path="liste_des_utilisateurs"
            element={<BackOfficeListeUsers />}
          />
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
