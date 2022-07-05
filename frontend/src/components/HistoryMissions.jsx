import React, { useState, useEffect, useContext } from "react";
import { api } from "@services/services";
import MissionSynthesis from "./MissionSynthesis";
import "@style/ValidatedMissions.css";
import ExportContext from "../contexts/Context";

function HistoryMissions() {
  const { infoUser } = useContext(ExportContext.Context);
  const [user, setUser] = useState();
  console.error(infoUser);

  useEffect(() => {
    const ENDPOINTINTERVENANT = "/intervenants";

    api
      .get(ENDPOINTINTERVENANT)
      .then((res) => {
        setUser(
          res.data.filter(
            (intervenant) => intervenant.email === infoUser.email
          )[0].id
        );
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, []);

  const ENDPOINT = `/missions/history/${user}`;
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    api
      .get(ENDPOINT)
      .then((res) => {
        setMissions(res.data);
      })
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <>
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
