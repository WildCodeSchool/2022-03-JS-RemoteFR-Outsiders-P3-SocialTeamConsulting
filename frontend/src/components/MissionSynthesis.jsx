import React, { useState } from "react";
import fullscreen from "@assets/fullscreen.png";
import triangle from "@assets/triangle.png";
import "@style/ValidatedMissions.css";

// function MissionSynthesis({ mission, key, validationArea }) {
function MissionSynthesis({ mission, key }) {
  const dateDebut = new Date(mission.date_debut);
  const dateFin = new Date(mission.date_fin);
  const duration = 1;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [showDescription, setShowDescription] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleShow = () => {
    setShowDescription(!showDescription);
    setIsRotated(!isRotated);
  };

  let missionTheme = "mission";
  if (mission.isvalidated === 1) {
    missionTheme += " is-validated";
  } else if (mission.isvalidated === 2) {
    missionTheme += " mission is-refused";
  } else if (mission.isvalidated === 0) {
    missionTheme += " pending-validation";
  }

  return (
    <div className={missionTheme}>
      <div className="section1">
        <div className="synthesis">
          <div>
            <h2 className="inline">Association : </h2>
            {mission.nom}
          </div>
          <div>
            <h2 className="inline">Métier : </h2>
            {mission.metier}
          </div>
          <div>
            <h2>Nom de la mission :</h2> {mission.intitule}
          </div>
          <div>
            <h2 className="inline">Date de la mission : </h2>
            Du {dateDebut.toLocaleDateString("fr-FR", options)} au{" "}
            {dateFin.toLocaleDateString("fr-FR", options)}
          </div>
          <div>
            <h2 className="inline">Horaires : </h2>
            {mission.horaire_debut}-{mission.horaire_fin} ({duration} h)
          </div>
          <div>
            <h2 className="inline">Ville : </h2>
            {mission.ville}
          </div>
          <div className="description">
            <div>
              <img
                src={triangle}
                alt="Voir la description complète"
                onClick={handleShow}
                className={isRotated ? "expand-button" : null}
              />
              <h2>Description de la mission : </h2>
            </div>
            <div
              key={key}
              className={showDescription ? "not-masked" : "masked"}
            >
              {mission.description}
            </div>
          </div>
          {/* {validationArea(mission.id)} */}
        </div>
        <div className="fullscreen">
          <img src={fullscreen} alt="full screen button" />
        </div>
      </div>
    </div>
  );
}
export default MissionSynthesis;
