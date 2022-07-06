import React, { useEffect, useState } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import MissionSynthesis from "@components/MissionSynthesis";

import "@style/ValidatedMissions.css";

function BackOfficeAdminMissionTerminee() {
  const [update, setUpdate] = useState(false);
  const finishMission = (missionId) => {
    const ENDPOINTVALIDATION = `/missions/terminee/${missionId}`;

    api
      .put(ENDPOINTVALIDATION)
      .then(() => {
        notifySuccess("le statut de la mission a été mis à jour");
        setUpdate(!update);
      })

      .catch((err) => {
        console.error(notifyError(err));
      });
  };
  const finishArea = (missionId) => {
    return (
      <div className="synthesis-finish_area">
        <button
          id="button_finish_mission"
          className="button-blue"
          type="submit"
          onClick={() => finishMission(missionId, true)}
        >
          Passer la mission en "Mission terminée"
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
      {missions.filter((e) => e.etat === "pourvue").length === 0 ? (
        <h2>Il n'y a aucune mission à valider pour l'instant</h2>
      ) : (
        missions
          .filter((e) => e.etat === "pourvue")
          .map((mission) => {
            return (
              <MissionSynthesis
                mission={mission}
                key={mission.id}
                finishArea={finishArea}
              />
            );
          })
      )}
    </div>
  );
}

export default BackOfficeAdminMissionTerminee;
