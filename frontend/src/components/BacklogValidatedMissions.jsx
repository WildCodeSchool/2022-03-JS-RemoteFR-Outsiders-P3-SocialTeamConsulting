import React, { useEffect, useState } from "react";
import axios from "axios";
import "@style/ValidatedMissions.css";
import MissionSynthesis from "./MissionSynthesis";

function BacklogValidatedMissions() {
  const API = "http://localhost:5000/missions/validated";
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
      {missions.map((mission) => {
        return <MissionSynthesis mission={mission} key={mission.id} />;
      })}
    </div>
  );
}

export default BacklogValidatedMissions;
