import React, { useEffect, useState } from "react";

import { api } from "@services/services";

import MissionSynthesis from "@components/MissionSynthesis";
import "@style/ValidatedMissions.css";

function ValidatedMissions() {
  const API = "/missions";
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    api
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

export default ValidatedMissions;
