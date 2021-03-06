import React, { useState, useEffect, useContext } from "react";
import { api, notifySuccess } from "@services/services";
import MissionSynthesis from "./MissionSynthesis";
import "@style/ValidatedMissions.css";
import ExportContext from "../contexts/Context";

function HistoryMissions() {
  const { infoUser } = useContext(ExportContext.Context);
  const [user, setUser] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const ENDPOINTINTERVENANT = "/intervenants";
    const ENDPOINTASSOCIATION = "/associations";
    let ENDPOINTROLE = "";
    if (infoUser.role === "intervenant") {
      ENDPOINTROLE = ENDPOINTINTERVENANT;
    }
    if (infoUser.role === "association") {
      ENDPOINTROLE = ENDPOINTASSOCIATION;
    }

    if (infoUser.role !== "administrateur") {
      api
        .get(ENDPOINTROLE)
        .then((res) => {
          setUser(
            res.data.filter((thisUser) => thisUser.email === infoUser.email)[0]
              .id
          );
        })
        .catch((err) => {
          console.error(console.error(err));
        });
    }
  }, []);

  const ENDPOINTMISSIONSINTERVENANT = `/missions/history/${user}`;
  const ENDPOINTMISSIONSASSOCIATION = `/missions/assohistory/${user}`;
  const ENDPOINTMISSIONSADMINISTRATEUR = `/missions`;
  let ENDPOINT = "";
  if (infoUser.role === "intervenant") {
    ENDPOINT = ENDPOINTMISSIONSINTERVENANT;
  }
  if (infoUser.role === "association") {
    ENDPOINT = ENDPOINTMISSIONSASSOCIATION;
  }
  if (infoUser.role === "administrateur") {
    ENDPOINT = ENDPOINTMISSIONSADMINISTRATEUR;
  }

  const [missions, setMissions] = useState([]);
  useEffect(() => {
    api
      .get(ENDPOINT)
      .then((res) => {
        setMissions(res.data);
      })
      .catch((err) => console.error(err));
  }, [user, update]);

  const handleAnnulationMission = (e) => {
    console.error(e.target.value);
    const ENDPOINTANNULATION = `/accepte/${e.target.value}/${user}`;
    api
      .put(ENDPOINTANNULATION)
      .then((result) => {
        if (result.status === 204) {
          notifySuccess("Suppression de la candidature avec succ??s");
          setUpdate(!update);
        }
      })
      .catch((err) => console.error(err));
  };

  const annulationMissionArea = (missionId) => {
    if (infoUser.role === "intervenant") {
      return (
        <div className="synthesis-validation_area">
          <button
            type="button"
            className="button-blue"
            value={missionId}
            onClick={handleAnnulationMission}
          >
            Annuler ma candidature
          </button>
        </div>
      );
    }
    return "";
  };

  return (
    <>
      <h2>
        Ensemble des missions pour lesquelles j'ai postul??, en cours et
        effectu??es
      </h2>

      <div className="legende">
        <div>L??gende : </div>
        <div className="is-refused-legend">refus?? :</div>
        <div className="pending-validation-legend">
          En attente de validation :
        </div>
        <div className="is-validated-legend">Valid?? : </div>
        <div className="is-pourvue-legend">Pourvue : </div>
      </div>

      <div className="card">
        {missions.length < 1 ? (
          <div>
            <h1>Il n'y a aucune mission dans votre historique.</h1>
          </div>
        ) : (
          missions.map((mission) => {
            return (
              <MissionSynthesis
                mission={mission}
                key={mission.id}
                annulationArea={annulationMissionArea}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default HistoryMissions;
