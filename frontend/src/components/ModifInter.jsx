import React, { useState, useEffect } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import MissionSynthesis from "./MissionSynthesis";
import "@style/ModifInter.css";

function ModifInter() {
  const ENDPOINT = "/missions";
  const [missions, setMissions] = useState([]);
  const [update, setUpdate] = useState(false);

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

  const modificationInter = (missionID) => {
    const [intervenants, setIntervenants] = useState([]);
    const [choiceInt, setChoiceInt] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [idCheck, setIdCheck] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const ENDPOINTINTERV = `/accepte/modification/${missionID}`;

    useEffect(() => {
      api
        .get(ENDPOINTINTERV)
        .then((res) => {
          setIntervenants(res.data);
          setIdCheck(`${missionID}-${res.data[0].id}`);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);

    const updateChangeOnInter = (e, intervenantID) => {
      e.preventDefault();
      const ENDPOINTUPDATEINTER = `/accepte/modification/${missionID}`;
      api
        .put(ENDPOINTUPDATEINTER, { intervenantID, missionID })
        .then(() => {
          notifySuccess("Vous venez de choisir un nouvel intervenant.");
          setUpdate(!update);
        })
        .catch((err) => {
          notifyError("Votre choix n'a pas pu aboutir. Merci de recommencer.");
          console.error(err);
        });
    };

    const updateChangeMission = (e) => {
      e.preventDefault();
      const ENDPOINTCHANGEMISSIONACCEPTE = `/missions/accepte/${missionID}`;
      const ENDPOINTCHANGEINTER = `/accepte/change/${missionID}`;
      api
        .put(ENDPOINTCHANGEINTER, { missionID })
        .then(() => {
          api.put(ENDPOINTCHANGEMISSIONACCEPTE, { missionID }).then(() => {
            notifySuccess(
              "Vous venez de repasser cette mission accessible au public."
            );
            setUpdate(!update);
          });
        })
        .catch((err) => {
          notifyError("Votre choix n'a pas pu aboutir. Merci de recommencer.");
          console.error(err);
        });
    };

    const handleCheck = (missionId, intervenantId) => {
      setChoiceInt(intervenantId);
      setIdCheck(`${missionId}-${intervenantId}`);
      setIsShow(true);
      setIsDisabled(true);
    };

    const handleClick = (e) => {
      e.preventDefault();
      setIsVisible(true);
    };

    return (
      <div className="modif-synthesis-validation_area">
        <form method="PUT" className="modif-form-container">
          <fieldset className="modif-fieldset">
            <legend>Choisissez un intervenant</legend>
            <div>
              {" "}
              <label htmlFor="checkbox">
                <div className="modif-inter-section">
                  {intervenants.map((intervenant) => {
                    return (
                      <div
                        role="button"
                        tabIndex={0}
                        className="modif-input-container"
                        onClick={() => handleCheck(missionID, intervenant.id)}
                      >
                        <input
                          type="radio"
                          checked={
                            `${missionID}-${intervenant.id}` === idCheck
                              ? "checked"
                              : null
                          }
                          id={`${missionID}-${intervenant.id}`}
                          name="intervenant_id"
                          value={intervenant.email}
                        />
                        {`${intervenant.nom} ${intervenant.prenom} `}
                      </div>
                    );
                  })}
                </div>
              </label>
            </div>
            {isDisabled ? (
              <button
                id="button_preinscription"
                className="button-blue modif-button-blue"
                type="submit"
                onClick={(e) => updateChangeOnInter(e, choiceInt, missionID)}
              >
                Modifier l'intervenant
              </button>
            ) : (
              <button
                disabled
                className="btn-disabled button-blue"
                type="button"
              >
                Modifier l'intervenant
              </button>
            )}
          </fieldset>
          {isShow && (
            <div className="modif-warning">
              <p>
                Attention vous vous apprêtez à choisir un nouvel intervenant,
                merci de le contacter pour valider ses disponibilitées.
              </p>
            </div>
          )}
          <button
            id="button_preinscription"
            className="modif-button button-blue button-plus-size"
            onClick={(e) => handleClick(e)}
            type="button"
          >
            Passer la mission en public
          </button>
        </form>
        {isVisible && (
          <div className="see-you-container">
            <div className="modif-see-you">
              <p>Souhaitez-vous vraiment passer la mission en public?</p>
              <div className="modif-button-section">
                <button
                  type="submit"
                  onClick={(e) => updateChangeMission(e, missionID)}
                  className="button-blue"
                >
                  Oui
                </button>
                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  className="button-blue"
                >
                  Retour
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card">
      {missions
        .filter((e) => e.etat === "pourvue")
        .map((mission) => {
          return (
            <MissionSynthesis
              mission={mission}
              key={mission.id}
              id={mission.id}
              modificationInter={modificationInter}
            />
          );
        })}
    </div>
  );
}

export default ModifInter;
