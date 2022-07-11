import React, { useEffect, useState } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import { useLocation } from "react-router-dom";

import "@style/App.css";
import "@style/ProfilInterv.css";

export default function ProfilAdmin() {
  const { state } = useLocation();
  const { email } = state;
  const [administrateur, setAdministrateur] = useState([{}]);

  useEffect(() => {
    const ENDPOINT = `/administrateurs/bymail/${email}`;
    api.get(ENDPOINT).then((result) => {
      setAdministrateur(result.data[0]);
    });
  }, []);
  // On veut mettre a jour les informations d'un intervenant

  const updateAdministrateur = (e) => {
    e.preventDefault();
    const ENDPOINTUPDATEADMIN = `/administrateurs/${administrateur.id}`;
    api
      .put(ENDPOINTUPDATEADMIN, administrateur)
      .then(() => {
        notifySuccess("Le profil de l'administrateur a été modifié.");
      })
      .catch(() => {
        notifyError("Une erreur est survenue lors de la mise à jour.");
      });
  };

  // changement de valeur
  function handleChange(event) {
    setAdministrateur({
      ...administrateur,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form
      className="backoffice_profilinterv_form"
      method="PUT"
      onSubmit={updateAdministrateur}
    >
      <div className="backoffice-bloc">
        <label htmlFor="name" className="backoffice-input-half">
          <p>Nom</p>
          <input
            className="rules"
            type="text"
            name="nom"
            placeholder={administrateur.nom}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="firstname" className="backoffice-input-half">
          <p>Prénom</p>
          <input
            className="rules"
            type="text"
            name="prenom"
            placeholder={administrateur.prenom}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>
      <div className="backoffice-bloc">
        <label htmlFor="mail" className="backoffice-input-half">
          <p>Email</p>
          <input
            className="rules"
            type="text"
            name="email"
            placeholder={administrateur.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="phone" className="backoffice-input-half">
          <p>Téléphone</p>
          <input
            className="rules"
            type="text"
            name="telephone"
            placeholder={administrateur.telephone}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>

      <div className="backoffice_profilinterv_submit_button">
        <button className="button-blue" type="submit">
          Modifier le profil de l'administrateur
        </button>
      </div>
    </form>
  );
}
