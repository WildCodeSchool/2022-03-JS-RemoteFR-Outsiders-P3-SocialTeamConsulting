import React from "react";
import fullscreen from "@assets/fullscreen.png";
import triangle from "@assets/triangle.png";
import "@style/ValidatedMissions.css";

function MissionSynthesis({ mission, showDescription, setShowDescription }) {
  const heureDebut = new Date(`
          ${mission.date_debut}, ${mission.horaire_debut}`);
  const heureFin = new Date(`${mission.date_fin}, ${mission.horaire_fin}`);
  const duration = heureDebut.getHours() - heureFin.getHours();

  return (
    <div className="mission">
      <div className="section1">
        <div className="synthesis">
          <div>
            <h2 className="inline">Association : </h2>
            {mission.association}
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
            {mission.date_debut}
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
                onClick={() => {
                  setShowDescription(!showDescription);
                }}
              />
              <h2>Description de la mission : </h2>
            </div>
            <div className={showDescription ? "not-masked" : "masked"}>
              {mission.description}
            </div>
          </div>
        </div>
        <div className="fullscreen">
          <img src={fullscreen} alt="full screen button" />
        </div>
      </div>
    </div>
  );
}
export default MissionSynthesis;
