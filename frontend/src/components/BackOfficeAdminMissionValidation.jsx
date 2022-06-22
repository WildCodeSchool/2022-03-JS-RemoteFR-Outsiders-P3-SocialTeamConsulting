import React, { useEffect, useState } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import MissionSynthesis from "@components/MissionSynthesis";

import "@style/ValidatedMissions.css";

function BackOfficeAdminMissionValidation() {
  const [update, setUpdate] = useState(false);
  const validateMission = (missionId, isAccepted) => {
    const ENDPOINTVALIDATION = `/missions/${missionId}`;

    api
      .put(ENDPOINTVALIDATION, { isValidated: isAccepted })
      .then(() => {
        notifySuccess("le statut de la mission a été mis à jour");
        setUpdate(!update);
      })

      .catch((err) => {
        console.error(notifyError(err));
      });
  };
  const validationArea = (missionId) => {
    return (
      <div className="synthesis-validation_area">
        <button
          id="button_preinscription"
          className="button-blue"
          type="submit"
          onClick={() => validateMission(missionId, true)}
        >
          Valider la mission
        </button>
        <button
          id="button_preinscription"
          className="button-orange"
          type="submit"
          onClick={() => validateMission(missionId, false)}
        >
          Refuser la mission
        </button>
      </div>
    );
  };

  const ENDPOINT = "/missions";
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    api
      .get(ENDPOINT)
      .then((res) => {
        setMissions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [update]);

  return (
    <div className="card">
      {missions.filter((e) => e.etat === "en attente").length === 0 ? (
        <h2>Il n'y a aucune mission à valider pour l'instant</h2>
      ) : (
        missions
          .filter((e) => e.etat === "en attente")
          .map((mission) => {
            return (
              <MissionSynthesis
                mission={mission}
                key={mission.id}
                validationArea={validationArea}
              />
            );
          })
      )}
    </div>
  );
}

export default BackOfficeAdminMissionValidation;
