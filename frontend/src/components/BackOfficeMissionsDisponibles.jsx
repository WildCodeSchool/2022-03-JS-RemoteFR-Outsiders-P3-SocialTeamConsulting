/* mport React, { useEffect, useState, useContext } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import MissionSynthesis from "@components/MissionSynthesis";
import ExportContext from "../contexts/Context"; */

function BackOfficeMissionsDisponibles() {
  /*
  const [update, setUpdate] = useState(false);
  const [listeMissions, setListeMissions] = useState([]);
  const [listeMissionsAcceptees, setListeMissionsAcceptees] = useState([]);
  const [userId, setUserId] = useState([]);
  const { infoUser } = useContext(ExportContext.Context);
  const { email } = infoUser; */

  /*

  useEffect(() => {
    const ENDPOINTINTERVENANT = "/intervenants";
    api
      .get(ENDPOINTINTERVENANT)
      .then((res) => {
        setUserId(
          res.data.filter((intervenant) => intervenant.email === email)
        );
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, []);

  useEffect(() => {
    const ENDPOINT = "/missions";
    const ENDPOINTACCEPTE = "/accepte";
    if (userId !== undefined) {
      api
        .get(ENDPOINTACCEPTE)
        .then((result) => {
          api
            .get(ENDPOINT)
            .then((res) => {
              setListeMissions(res.data.filter((mission) => mission.etat === "acceptée").filter((mission) => mission.id));
            })
        setListeMissionsAcceptees(result.data.filter((mission) => mission.intervenants_id === userId[0].id))
      })
        .then(() => {

        })
    }



    
    
      .catch((err) => {
        console.error(err);
      });
  }, [userId, update]);



  useEffect(() => {
    const ENDPOINT = "/missions";
    const ENDPOINTACCEPTE = "/accepte";
    api
      .get(ENDPOINTINTERVENANT)
      .then((res) => {
        setUserId(res.data.filter((intervenant) => intervenant.email === email));
      })
      .then(() => {
        api
          .get(ENDPOINT)
          .then((res) => {
            res.data.filter((mission) => {
              for (let i = 0; i < listeMissionsAcceptees.length; i++) {
                if (
                  listeMissionsAcceptees.intervenants_id === userId &&
                  listeMissionsAcceptees.missions_id === mission.id
                ) {
                  return false;
                }
              }
              console.log(mission.id)
              return true;
            });
            setListeMissions(res.data);
          })
          .then(() => {
            api.get(ENDPOINTACCEPTE).then((result) => {
              setListeMissionsAcceptees(result.data.filter((mission) => mission.intervenants_id === userId[0].id))
            });
          })
          .catch((err) => {
            console.error(console.error(err));
          });
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, [update]);

  const candidaterMission = (missionId) => {
    const ENDPOINTCANDIDATER = `/accepte/${missionId}`;
    const candidat = userId[0].id;
    api
      .post(ENDPOINTCANDIDATER, { candidat })
      .then(() => {
        notifySuccess("Vous avez candidater pour cette mission, un administrateur doit valider votre candidature.");
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
      {listeMissions.filter((e) => e.etat === "acceptée").length === 0 ? (
        <h2>Il n'y a aucune mission à valider pour l'instant</h2>
      ) : (
        listeMissions
          .map((mission) => {
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
    ) */
  return <h1>TEST</h1>;
}

export default BackOfficeMissionsDisponibles;
