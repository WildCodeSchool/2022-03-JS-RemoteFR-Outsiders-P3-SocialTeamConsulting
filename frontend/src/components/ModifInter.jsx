import React, { useState, useEffect } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import MissionSynthesis from "./MissionSynthesis";
import "@style/ModifInter.css";

function ModifInter() {
  const ENDPOINT = "/missions";
  const [missions, setMissions] = useState([]);
  const [update, setUpdate] = useState(false);

  // Permet de recuperer les missions et de les afficher.
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

    /**
     * Permet de recuperer les noms et prenoms des intervenants qui ont ete positionne sur une mission et ceux qui avait ete refuse.
     *  */
    const ENDPOINTINTERV = `/accepte/modification/${missionID}`;
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

    // permet de voir et stocker le changement de valeur
    const handleChange = (int) => {
      setIsShow(!isShow);
      setChoiceInt(int.id);
    };

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

    return (
      <div className="modif-synthesis-validation_area">
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
                        checked={
                          intervenant.isvalidated === 1 ? "checked" : null
                        }
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
              onClick={(e) => updateChangeOnInter(e, choiceInt, missionID)}
            >
              Modifier l'intervenant sur la mission
            </button>
          </fieldset>
        </form>
        {isShow && (
          <div className="modif-warning">
            Attention vous vous appretez à choisir un nouvel intervenant, merci
            de le contacter.
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
