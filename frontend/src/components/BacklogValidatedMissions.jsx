import React, { useEffect, useState } from "react";
import { api } from "@services/services";
import "@style/ValidatedMissions.css";
import MissionSynthesis from "./MissionSynthesis";

function BacklogValidatedMissions() {
  const ENDPOINT = "/missions/validated";
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
      <h1>Ensemble des missions ouvertes à candidature</h1>
      {missions.map((mission) => {
        return <MissionSynthesis mission={mission} key={mission.id} />;
      })}
    </div>
  );
}

export default BacklogValidatedMissions;
