import React, { useState, useEffect } from "react";
import { api } from "@services/services";
import MissionSynthesis from "./MissionSynthesis";
import "@style/ValidatedMissions.css";

function HistoryMissions() {
  const [user, setUser] = useState("C3");
  const [users, setUsers] = useState([]);
  const ENDPOINT = `/missions/history/${user}`;
  const INTERVENANTS = `/intervenants`;
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    api
      .get(ENDPOINT)
      .then((res) => {
        setMissions(res.data);
      })
      .catch((err) => console.error(err));
  }, [user]);

  useEffect(() => {
    api
      .get(INTERVENANTS)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <>
      <span>Utilisateur : </span>
      <form>
        <select onChange={handleChange}>
          {users.map((userdata) => {
            return (
              <option value={userdata.id} key={userdata.id}>
                {userdata.id}
              </option>
            );
          })}
        </select>
      </form>
      <h2>
        Ensemble des missions pour lesquelles j'ai postulé, en cours et
        effectuées
      </h2>
      <div className="legende">
        <div>Légende : </div>
        <div>refusé :</div>
        <div className="is-refused-legend"> </div>
        <div>En attente de validation :</div>
        <div className="pending-validation-legend"> </div>
        <div>Validé : </div>
        <div className="is-validated-legend"> </div>
      </div>

      <div className="card">
        {missions.map((mission) => {
          return <MissionSynthesis mission={mission} key={mission.id} />;
        })}
      </div>
    </>
  );
}

export default HistoryMissions;
