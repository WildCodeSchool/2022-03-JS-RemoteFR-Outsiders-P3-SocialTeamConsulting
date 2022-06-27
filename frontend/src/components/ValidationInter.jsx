import React, { useState, useEffect } from "react";
import { api } from "@services/services";

function ValidationInter(missionID) {
  /**
   * Permet de recuperer les noms et prenoms des intervenants qui se positionnent sur une mission, ils seront push dans un tableau.
   *  */
  const [intervenants, setIntervenants] = useState([]);
  const [choiceInt, setChoiceInt] = useState([]);
  const ENDPOINTINTERV = "/accepte/validation";

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
  /**
   * Fin de la logique des intervenants
   * Ok
   */

  // permet de voir et stocker le changement de valeur
  const handleChange = (int) => {
    setChoiceInt(int.id);
  };

  /**
   * @desc accepteMission permet de mettre à jour la mission
   * celui ci prendra en compte
   *
   * @param
   * e = event
   * missionID = l'id de la mission
   * intervenantID = l'id de l'intervenant choisit
   */
  const accepteMission = (e, intervenantID) => {
    console.warn({ intervenantID, missionID });
    e.preventDefault();
    const ENDPOINTACCEPTE = `/accepte/${missionID}`;

    api
      .put(ENDPOINTACCEPTE, { intervenantID, missionID })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
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
}

export default ValidationInter;
