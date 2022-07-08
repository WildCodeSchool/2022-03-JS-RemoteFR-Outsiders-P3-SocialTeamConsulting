import React, { useState } from "react";
import metiers from "@services/metiers.json";

import "@style/synthesisCard.css";
import "@style/ValidatedMissions.css";

function MissionSynthesis({
  mission,
  validationArea,
  validationInter,
  canditaterArea,
  finishArea,
  modificationInter,
}) {
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
  const [textLength, setTextLength] = useState(8);
  const [more, setMore] = useState("En savoir plus");

  const handleShow = () => {
    setShowDescription(!showDescription);
    setIsRotated(!isRotated);
    if (textLength === 8) {
      setTextLength(mission.description.split(" ").length);
    } else {
      setTextLength(8);
    }
    if (more === "En savoir plus") {
      setMore("masquer la description");
    } else {
      setMore("En savoir plus");
    }
  };

  let missionTheme = "";
  if (mission.isvalidated === 1) {
    missionTheme = "synthesis-is-validated";
  } else if (mission.isvalidated === 2) {
    missionTheme = "synthesis-mission is-refused";
  } else if (mission.isvalidated === 0) {
    missionTheme = "synthesis-pending-validation";
  }

  const style = metiers.filter((metier) => {
    return metier.metier === mission.metier;
  });

  return (
    <div className="synthesis">
      <div className="synthesis-container">
        <div className={`synthesis-card_header ${style[0].style}`}>
          <h2>{mission.intitule}</h2>
          <h2>{mission.metier}</h2>
        </div>
        <div className="synthesis-asso">
          <h2>{mission.nom}</h2>
        </div>
        <div className="synthesis-date">
          <p>
            Du {dateDebut.toLocaleDateString("fr-FR", options)} au{" "}
            {dateFin.toLocaleDateString("fr-FR", options)}
          </p>
          <p className="synthesis-heures">
            {mission.horaire_debut}-{mission.horaire_fin} ({duration} h)
          </p>
        </div>
        <div className="synthesis-ville">
          <h2 className="inline">Adresse : </h2>
          <br />
          {`${mission.adresse} - ${mission.code_postal} ${mission.ville}`}
        </div>
        <div className="synthesis-description">
          <div>
            <h2>Mission : </h2>
            {mission.description.split(" ").slice(0, textLength).join(" ")}
            {more === "En savoir plus" ? "..." : ""}
            <p className="more" onClick={handleShow}>
              {more}
            </p>
          </div>
        </div>
      </div>
      <div className="synthesis-area">
        {validationArea ? validationArea(mission.id) : false}
        {validationInter ? validationInter(mission.id) : false}
        {canditaterArea ? canditaterArea(mission.id) : false}
        {finishArea ? finishArea(mission.id) : false}
        {modificationInter ? modificationInter(mission.id) : false}
      </div>
      <div className={`synthesis-footer ${missionTheme}`} />
    </div>
  );
}

export default MissionSynthesis;
