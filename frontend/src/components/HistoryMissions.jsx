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

    api
      .get(ENDPOINTINTERVENANT)
      .then((res) => {
        setUser(
          res.data.filter(
            (intervenant) => intervenant.email === infoUser.email
          )[0].id
        );
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, []);

  const [missions, setMissions] = useState([]);
  useEffect(() => {
    const ENDPOINT = `/missions/history/${user}`;
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
          notifySuccess("Suppression de la candidature avec succès");
          setUpdate(!update);
        }
      })
      .catch((err) => console.error(err));
  };

  const annulationMissionArea = (missionId) => {
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
  };

  return (
    <>
      <h2>
        Ensemble des missions pour lesquelles j'ai postulé, en cours et
        effectuées
      </h2>

      <div className="legende">
        <div>Légende : </div>
        <div>refusé :</div>
        <div className="is-refused-legend"> </div>
        <div>En attente de validation :</div>
        <div className="pending-validation-legend"> </div>
        <div>Validé : </div>
        <div className="is-validated-legend"> </div>
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
