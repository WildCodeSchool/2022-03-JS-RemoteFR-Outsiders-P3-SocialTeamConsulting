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
    const ENDPOINTANNULATION = `/accepte/annulation/${e.target.value}/${user}`;
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
      <div className="header-mission-synthesis">
        <div>
          <h2>
            Ensemble des missions pour lesquelles j'ai postulé, en cours et
            effectuées
          </h2>
        </div>

        <div className="legende">
          <div>Légende : </div>
          <div>refusée :</div>
          <div className="is-refused-legend"> </div>
          <div>En attente de validation :</div>
          <div className="pending-validation-legend"> </div>
          <div>Validée : </div>
          <div className="is-validated-legend"> </div>
        </div>
      </div>
      <div className="filters">
        <form action="" method="post" className="filter-from" onSubmit="">
          <label htmlFor="refused">
            <input
              type="checkbox"
              value="refusées"
              id="refused"
              name="refused"
            />
            <p className="inline"> : Refusées </p>
          </label>
          <label htmlFor="pending">
            <input
              type="checkbox"
              value="pending"
              id="pending"
              name="pending"
            />
            <p className="inline"> : En attente de validation </p>
          </label>
          <label htmlFor="validated">
            <input
              type="checkbox"
              value="validated"
              id="validated"
              name="validated"
            />
            <p className="inline"> : Validées </p>
          </label>
          <label htmlFor="month-selection">
            <select
              value="month-selection"
              id="month-selection"
              name="month-selection"
            >
              <option value="this-month">mois en cours</option>
              <option value="previous-month">mois précédent</option>
              <option value="even-before">mois - 2</option>
            </select>
            <p className="inline"> : Validées </p>
          </label>
        </form>
      </div>

      <div className="card">
        {missions.length < 1 ? (
          <div>
            <h2>Il n'y a aucune mission dans votre historique.</h2>
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
