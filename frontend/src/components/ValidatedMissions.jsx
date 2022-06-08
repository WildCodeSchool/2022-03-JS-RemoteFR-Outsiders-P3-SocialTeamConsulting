import React from "react";
import fullscreen from "@assets/fullscreen.png";
// import MissionSynthesis from "./MissionSynthesis";
import "@style/ValidatedMissions.css";

function ValidatedMissions() {
  const missions = [
    {
      id: 1,
      title: "Prise en charge de jeunes mineurs ",
      association: "Coeur en folie",
      adresse: "20 rue de la cordonnerie",
      codePostal: 82300,
      ville: "Caussade",
      desc: "Le professionnel mis à disposition du client aura pour mission : Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service. Soutien de l’éducateur réfèrent. Appliquer les consignes de sécurité propre au site. La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante.",
      horaire: "21h-9h00",
      date: "21/07/2023",
    },
    {
      id: 2,
      title: "Prise en charge de jeunes mineurs ",
      association: "Coeur en folie",
      adresse: "20 rue de la cordonnerie",
      codePostal: 82300,
      ville: "Caussade",
      desc: "Le professionnel mis à disposition du client aura pour mission : Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service. Soutien de l’éducateur réfèrent. Appliquer les consignes de sécurité propre au site. La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante.",
      horaire: "21h-9h00",
      date: "21/07/2023",
    },
    {
      id: 3,
      title: "Prise en charge de jeunes mineurs ",
      association: "Coeur en folie",
      adresse: "20 rue de la cordonnerie",
      codePostal: 82300,
      ville: "Caussade",
      desc: "Le professionnel mis à disposition du client aura pour mission : Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service. Soutien de l’éducateur réfèrent. Appliquer les consignes de sécurité propre au site. La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante.",
      horaire: "21h-9h00",
      date: "21/07/2023",
    },
    {
      id: 1,
      title: "Prise en charge de jeunes mineurs ",
      association: "Coeur en folie",
      adresse: "20 rue de la cordonnerie",
      codePostal: 82300,
      ville: "Caussade",
      desc: "Le professionnel mis à disposition du client aura pour mission : Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service. Soutien de l’éducateur réfèrent. Appliquer les consignes de sécurité propre au site. La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante.",
      horaire: "21h-9h00",
      date: "21/07/2023",
    },
  ];
  return (
    <div className="card">
      {missions.map((mission) => {
        return (
          <div className="mission">
            <div className="section1">
              <div>
                <div>
                  <h2>Nom de la mission :</h2> {mission.title}
                </div>
                <div>
                  <h2 className="inline">Association : </h2>
                  {mission.association}
                </div>
                <div>
                  <h2 className="inline">Date de la mission : </h2>
                  {mission.date}
                </div>
                <div>
                  <h2 className="inline">Horaires : </h2>
                  {mission.horaire}
                </div>
                <div>
                  <h2 className="inline">Ville : </h2>
                  {mission.ville}
                </div>
                <div>
                  <h2>Description de la mission : </h2>
                  {`${mission.desc}`}
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
