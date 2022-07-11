import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "@pages/Home";
import BackOffice from "@pages/BackOffice";
import LandingPage from "@pages/LandingPage";
import AccueilAsso from "@pages/AccueilAsso";
import AccueilIntervenant from "@pages/AccueilIntervenant";
import PostMission from "@pages/PostMission";
import ModifInter from "@components/ModifInter";
import FormAsso from "@pages/FormAsso";
import FormAssoContact from "@pages/FormAssoContact";
import FormInterv from "@pages/FormInterv";
import ProfilAdmin from "@components/ProfilAdmin";
import ProfilInterv from "@components/ProfilInterv";
import ProfilAsso from "@components/ProfilAsso";
import BacklogValidatedMissions from "@components/BacklogValidatedMissions";
import HistoryMissions from "@components/HistoryMissions";
import BackOfficeAdminMissionValidation from "@components/BackOfficeAdminMissionValidation";
import BackOfficeAdminInterValidation from "@components/BackOfficeAdminInterValidation";
import BackOfficeMissionsDisponibles from "@components/BackOfficeMissionsDisponibles";
import BackOfficeAdminMissionTerminee from "@components/BackOfficeAdminMissionTerminee";
import BackOfficeLectureMessage from "@components/BackOfficeLectureMessage";
import PrivateRoute from "@services/PrivateRoute";
import BackOfficeListeUsers from "@components/BackOfficeListeUsers";
import ExportContext from "./contexts/Context";
import "@style/App.css";

function App() {
  const { infoUser } = useContext(ExportContext.Context);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/back_office"
          element={
            <PrivateRoute
              isAllowed={
                infoUser.role === "association" ||
                infoUser.role === "administrateur" ||
                infoUser.role === "intervenant"
              }
            >
              <BackOffice />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <PrivateRoute
                isAllowed={
                  infoUser.role === "association" ||
                  infoUser.role === "administrateur" ||
                  infoUser.role === "intervenant"
                }
              >
                {infoUser.role === "administrateur" ? (
                  <BackOfficeLectureMessage />
                ) : (
                  <HistoryMissions />
                )}
              </PrivateRoute>
            }
          />
          <Route
            path="modification_profil_intervenant"
            element={
              <PrivateRoute isAllowed={infoUser.role === "administrateur"}>
                <ProfilInterv />
              </PrivateRoute>
            }
          />
          <Route
            path="modification_profil_association"
            element={
              <PrivateRoute isAllowed={infoUser.role === "administrateur"}>
                <ProfilAsso />
              </PrivateRoute>
            }
          />
          <Route
            path="modification_profil_administrateur"
            element={
              <PrivateRoute isAllowed={infoUser.role === "administrateur"}>
                <ProfilAdmin />
              </PrivateRoute>
            }
          />
          <Route
            path="post_mission"
            element={
              <PrivateRoute
                isAllowed={
                  infoUser.role === "association" ||
                  infoUser.role === "administrateur" ||
                  infoUser.role === "intervenant"
                }
              >
                <PostMission />
              </PrivateRoute>
            }
          />
          <Route
            path="missions_disponibles"
            element={
              <PrivateRoute
                isAllowed={
                  infoUser.role === "intervenant" ||
                  infoUser.role === "administrateur"
                }
              >
                <BackOfficeMissionsDisponibles />
              </PrivateRoute>
            }
          />
          <Route
            path="backlog_validated_missions"
            element={
              <PrivateRoute
                isAllowed={
                  infoUser.role === "intervenant" ||
                  infoUser.role === "administrateur"
                }
              >
                <BacklogValidatedMissions />
              </PrivateRoute>
            }
          />

          <Route
            path="validation_mission"
            element={
              <PrivateRoute isAllowed={infoUser.role === "administrateur"}>
                <BackOfficeAdminMissionValidation />
              </PrivateRoute>
            }
          />
          <Route
            path="validation_intervenant"
            element={
              <PrivateRoute isAllowed={infoUser.role === "administrateur"}>
                <BackOfficeAdminInterValidation />
              </PrivateRoute>
            }
          />
          <Route
            path="historique_missions"
            element={
              <PrivateRoute
                isAllowed={
                  infoUser.role === "intervenant" ||
                  infoUser.role === "association" ||
                  infoUser.role === "administrateur"
                }
              >
                <HistoryMissions />
              </PrivateRoute>
            }
          />
          <Route
            path="terminer_mission"
            element={
              <PrivateRoute isAllowed={infoUser.role === "administrateur"}>
                <BackOfficeAdminMissionTerminee />
              </PrivateRoute>
            }
          />
          <Route
            path="liste_des_utilisateurs"
            element={
              <PrivateRoute isAllowed={infoUser.role === "administrateur"}>
                <BackOfficeListeUsers />
              </PrivateRoute>
            }
          />
          <Route
            path="modification_mission_intervenant"
            element={
              <PrivateRoute isAllowed={infoUser.role === "administrateur"}>
                <ModifInter />
              </PrivateRoute>
            }
          />
          <Route
            path="lecture_message"
            element={
              <PrivateRoute isAllowed={infoUser.role === "administrateur"}>
                <BackOfficeLectureMessage />
              </PrivateRoute>
            }
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
