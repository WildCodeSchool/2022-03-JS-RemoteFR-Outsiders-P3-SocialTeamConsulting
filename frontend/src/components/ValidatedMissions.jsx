import React, { useState } from "react";

import MissionSynthesis from "./MissionSynthesis";
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
        return (
          <MissionSynthesis
            mission={mission}
            showDescription={showDescription}
            setShowDescription={setShowDescription}
            key={missions.id}
          />
        );
      })}
    </div>
  );
}
export default ValidatedMissions;
