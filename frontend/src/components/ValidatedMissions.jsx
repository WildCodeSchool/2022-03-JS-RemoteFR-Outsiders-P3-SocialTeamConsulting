import React, { useEffect, useState } from "react";
import axios from "axios";

import MissionSynthesis from "@components/MissionSynthesis";
import "@style/ValidatedMissions.css";

function ValidatedMissions() {
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
      <h1>Ensemble des missions auxquelles j'ai candidaté et </h1>
      {missions.map((mission) => {
        return <MissionSynthesis mission={mission} key={mission.id} />;
      })}
    </div>
  );
}

export default ValidatedMissions;
