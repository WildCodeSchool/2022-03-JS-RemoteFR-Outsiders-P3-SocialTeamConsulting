import React, { useState, useEffect } from "react";
import axios from "axios";
import MissionSynthesis from "./MissionSynthesis";
import "@style/ValidatedMissions.css";

function HistoryMissions() {
  const API = "http://localhost:5000/missions/history";
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setMissions(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h2>
        Ensemble des missions pour lesquelles j'ai postulé, en cours et
        effectuées
      </h2>
      <div className="card">
        {missions.map((mission) => {
          return <MissionSynthesis mission={mission} key={mission.id} />;
        })}
      </div>
    </>
  );
}

export default HistoryMissions;
