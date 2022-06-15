import React, { useEffect, useState } from "react";
import axios from "axios";

import MissionSynthesis from "./MissionSynthesis";
import "@style/ValidatedMissions.css";

function ValidatedMissions() {
  const API = "http://localhost:5000/missions";
  const [missions, setMissions] = useState();
  useEffect(() => {
    axios.get(API).then((res) => setMissions(res.data));
  }, []);

  console.error(missions[2].intitule);

  const missionObject = [
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
  ];

  return (
    <div className="card">
      {missions.map((mission) => {
        return <MissionSynthesis mission={mission} key={missionObject.id} />;
      })}
    </div>
  );
}
export default ValidatedMissions;
