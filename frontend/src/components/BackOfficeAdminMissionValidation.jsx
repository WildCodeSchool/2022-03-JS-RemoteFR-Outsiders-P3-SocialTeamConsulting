import React, { useEffect, useState } from "react";
import axios from "axios";
import MissionSynthesis from "./MissionSynthesis";
import "@style/ValidatedMissions.css";

function BackOfficeAdminMissionValidation() {
  const validateMission = (missionId, isAccepted) => {
    const ENDPOINTVALIDATION = `${
      import.meta.env.VITE_BACKEND_URL
    }/missions/${missionId}`;

    axios
      .put(ENDPOINTVALIDATION, { isValidated: isAccepted })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
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

  const API = "http://localhost:5000/missions";
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setMissions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="card">
      {missions
        .filter((e) => e.etat === "en attente")
        .map((mission) => {
          return (
            <MissionSynthesis
              mission={mission}
              key={mission.id}
              validationArea={validationArea}
            />
          );
        })}
    </div>
  );
}

export default BackOfficeAdminMissionValidation;
