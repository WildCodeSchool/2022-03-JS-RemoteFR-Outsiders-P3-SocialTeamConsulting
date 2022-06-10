import React, { useState } from "react";
import fullscreen from "@assets/fullscreen.png";
import triangle from "@assets/triangle.png";
// import MissionSynthesis from "./MissionSynthesis";
import "@style/ValidatedMissions.css";

function ValidatedMissions() {
  const missions = [
    {
      id: 1,
      intitule: "Prise en charge de jeunes mineurs ",
      metier: "Éducateur spécialisé",
      association: "Coeur en folie",
      adresse: "20 rue de la cordonnerie",
      codePostal: 82300,
      ville: "Caussade",
      description:
        "Le professionnel mis à disposition du client aura pour mission : Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service. Soutien de l’éducateur réfèrent. Appliquer les consignes de sécurité propre au site. La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante.",
      horaire_debut: "21:00",
      horaire_fin: "09:00",
      date_debut: "07/07/2023",
      date_fin: "07/08/2023",
    },
    {
      id: 2,
      intitule: "Prise en charge de jeunes mineurs ",
      metier: "Éducateur spécialisé",
      association: "Coeur en folie",
      adresse: "20 rue de la cordonnerie",
      codePostal: 82300,
      ville: "Caussade",
      description:
        "Le professionnel mis à disposition du client aura pour mission : Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service. Soutien de l’éducateur réfèrent. Appliquer les consignes de sécurité propre au site. La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante.",
      horaire_debut: "21:00",
      horaire_fin: "09:00",
      date_debut: "07/07/2023",
      date_fin: "07/08/2023",
    },
    {
      id: 3,
      intitule: "Prise en charge de jeunes mineurs ",
      metier: "Éducateur spécialisé",
      association: "Coeur en folie",
      adresse: "20 rue de la cordonnerie",
      codePostal: 82300,
      ville: "Caussade",
      description:
        "Le professionnel mis à disposition du client aura pour mission : Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service. Soutien de l’éducateur réfèrent. Appliquer les consignes de sécurité propre au site. La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante.",
      horaire_debut: "21:00",
      horaire_fin: "09:00",
      date_debut: "07/07/2023",
      date_fin: "07/08/2023",
    },
    {
      id: 4,
      intitule: "Prise en charge de jeunes mineurs ",
      metier: "Éducateur spécialisé",
      association: "Coeur en folie",
      adresse: "20 rue de la cordonnerie",
      codePostal: 82300,
      ville: "Caussade",
      description:
        "Le professionnel mis à disposition du client aura pour mission : Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service. Soutien de l’éducateur réfèrent. Appliquer les consignes de sécurité propre au site. La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante.",
      horaire_debut: "21:00",
      horaire_fin: "09:00",
      date_debut: "07/07/2023",
      date_fin: "07/08/2023",
    },
    {
      id: 5,
      intitule: "Prise en charge de jeunes mineurs ",
      metier: "Éducateur spécialisé",
      association: "Coeur en folie",
      adresse: "20 rue de la cordonnerie",
      codePostal: 82300,
      ville: "Caussade",
      description:
        "Le professionnel mis à disposition du client aura pour mission : Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service. Soutien de l’éducateur réfèrent. Appliquer les consignes de sécurité propre au site. La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante.",
      horaire_debut: "21:00",
      horaire_fin: "09:00",
      date_debut: "07/07/2023",
      date_fin: "07/08/2023",
    },
  ];

  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="card">
      {missions.map((mission) => {
        const heureDebut = new Date(`
          ${mission.date_debut}, ${mission.horaire_debut}`);
        const heureFin = new Date(
          `${mission.date_fin}, ${mission.horaire_fin}`
        );
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
      })}
    </div>
  );
}
export default ValidatedMissions;
