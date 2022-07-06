import React, { useState, useEffect } from "react";
import { api } from "@services/services";
import MissionSynthesis from "./MissionSynthesis";

function ModifInter() {
  const ENDPOINT = "/missions";
  const [missions, setMissions] = useState([]);
  const [update] = useState(false);

  // Permet de recuperer les missions en status acceptee et de les afficher.
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
    const [setChoiceInt] = useState([]);

    /**
     * Permet de recuperer les noms et prenoms des intervenants qui ont ete positionne sur une mission .
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
      setChoiceInt(int.id);
    };

    return (
      <div className="synthesis-validation_area">
        <form method="PUT">
          <fieldset>
            <legend>Choisissez un intervenant:</legend>
            <div>
              {intervenants.map((intervenant, i) => {
                return (
                  <div i={i}>
                    <label htmlFor="checkbox">
                      <input
                        type="radio"
                        checked={intervenant.isvalidated === 1 && "checked"}
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
            >
              Modifier l'intervenant sur la mission
            </button>
          </fieldset>
        </form>
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
