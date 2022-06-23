import React, { useState, useEffect } from "react";
import { api } from "@services/services";
import MissionSynthesis from "./MissionSynthesis";
import ValidationInter from "./ValidationInter";

function BackOfficeAdminInterValidation() {
  <ValidationInter />;
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
  }, []);

  return (
    <div className="card">
      {missions
        .filter((e) => e.etat === "Validé")
        .map((mission) => {
          return (
            <MissionSynthesis
              mission={mission}
              key={mission.id}
              ValidationInter={ValidationInter}
            />
          );
        })}
    </div>
  );
}

export default BackOfficeAdminInterValidation;
