import React, { useState, useEffect } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import MissionSynthesis from "./MissionSynthesis";

function BackOfficeAdminInterValidation() {
  const ENDPOINT = "/missions/accepte";
  const [missions, setMissions] = useState([]);
  const [update, setUpdate] = useState(false);

  const validationInter = (missionID) => {
    const [intervenants, setIntervenants] = useState([]);
    const [choiceInt, setChoiceInt] = useState([]);
    const ENDPOINTINTERV = `/accepte/validation/${missionID}`;

    useEffect(() => {
      api
        .get(ENDPOINTINTERV)
        .then((res) => {
          setIntervenants(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);

    const handleChange = (int) => {
      setChoiceInt(int.id);
    };

    const accepteMission = (e, intervenantID) => {
      e.preventDefault();
      const ENDPOINTACCEPTE = `/accepte/${missionID}`;
      const ENDPOINTPOURVUE = `/missions/pourvue/${missionID}`;
      api
        .put(ENDPOINTACCEPTE, { intervenantID, missionID })
        .then(() => {
          api.put(ENDPOINTPOURVUE).then(() => {
            notifySuccess("Vous venez de choisir un intervenant.");
            setUpdate(!update);
          });
        })
        .catch((err) => {
          notifyError("Votre choix n'a pas pu aboutir. Merci de recommencer.");
          console.error(err);
        });
    };

    return (
      <div className="synthesis-validation_area">
        <form method="PUT">
          <fieldset className="modif-fieldset">
            <legend>Choisissez un intervenant:</legend>
            <div>
              {intervenants.map((intervenant, i) => {
                return (
                  <div i={i}>
                    <label htmlFor="checkbox">
                      <input
                        type="radio"
                        name="intervenant_id"
                        value={intervenant.email}
                        onChange={() => handleChange(intervenant)}
                      />
                      {`${intervenant.nom} ${intervenant.prenom} `}
                    </label>
                  </div>
                );
              })}
            </div>
            <button
              id="button_preinscription"
              className="button-blue"
              type="submit"
              onClick={(e) => accepteMission(e, choiceInt, missionID)}
            >
              Valider cet intervenant
            </button>
          </fieldset>
        </form>
      </div>
    );
  };
  useEffect(() => {
    api
      .get(ENDPOINT)
      .then((res) => {
        setMissions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [update]);

  return (
    <div className="card">
      {missions
        .filter((e) => e.etat === "acceptée")
        .map((mission) => {
          return (
            <MissionSynthesis
              mission={mission}
              key={mission.id}
              id={mission.id}
              validationInter={validationInter}
            />
          );
        })}
    </div>
  );
}

export default BackOfficeAdminInterValidation;
