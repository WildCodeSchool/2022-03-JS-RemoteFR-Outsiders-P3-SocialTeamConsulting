import React, { useEffect, useState, useContext } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import MissionSynthesis from "@components/MissionSynthesis";
import ExportContext from "../contexts/Context";

function BackOfficeMissionsDisponibles() {
  const [update, setUpdate] = useState(false);
  const [listeMissions, setListeMissions] = useState([]);
  const [userId, setUserId] = useState();
  const { infoUser } = useContext(ExportContext.Context);
  const { email } = infoUser;

  useEffect(() => {
    const ENDPOINTINTERVENANT = "/intervenants";
    api
      .get(ENDPOINTINTERVENANT)
      .then((res) => {
        setUserId(
          res.data.filter((intervenant) => intervenant.email === email)[0].id
        );
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, []);

  useEffect(() => {
    if (userId !== undefined) {
      const ENDPOINTNOTACCEPTED = `/missions/nonacceptee/${userId}`;
      api
        .get(ENDPOINTNOTACCEPTED, { user: userId })
        .then((resultat) => {
          setListeMissions(resultat.data);
        })
        .catch((err) => {
          console.error(console.error(err));
        });
    }
  }, [update, userId]);

  const candidaterMission = (missionId) => {
    const ENDPOINTCANDIDATER = `/accepte/${missionId}`;
    api
      .post(ENDPOINTCANDIDATER, { user: userId })
      .then(() => {
        notifySuccess(
          "Vous avez candidaté pour cette mission, un administrateur doit valider votre candidature."
        );
        setUpdate(!update);
      })

      .catch((err) => {
        console.error(notifyError(err));
      });
  };

  const canditaterArea = (missionId) => {
    return (
      <div className="synthesis-validation_area">
        <button
          className="button-blue"
          type="submit"
          onClick={() => candidaterMission(missionId, true)}
        >
          Cadidater pour cette mission
        </button>
      </div>
    );
  };

  return (
    <div className="card">
      {listeMissions.length === 0 ? (
        <h2>Il n'y a aucune mission disponible pour l'instant</h2>
      ) : (
        listeMissions.map((mission) => {
          return (
            <MissionSynthesis
              mission={mission}
              key={mission.id}
              canditaterArea={canditaterArea}
            />
          );
        })
      )}
    </div>
  );
}

export default BackOfficeMissionsDisponibles;
