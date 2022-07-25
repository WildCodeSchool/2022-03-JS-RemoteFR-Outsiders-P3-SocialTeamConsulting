import React, { useEffect, useState } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import { useLocation } from "react-router-dom";
import ProfilStatusModification from "./ProfilStatusModification";

import "@style/App.css";
import "@style/ProfilInterv.css";

export default function ProfilAsso() {
  const { state } = useLocation();
  const { email } = state;
  const [association, setAssociation] = useState({});

  useEffect(() => {
    const ENDPOINT = `/associations/bymail/${email}`;
    api.get(ENDPOINT).then((result) => {
      setAssociation(result.data[0]);
    });
  }, []);
  // On veut mettre a jour les informations d'un intervenant

  const updateAssociation = (e) => {
    e.preventDefault();
    const ENDPOINTUPDATEASSO = `/associations/${association.id}`;
    api
      .put(ENDPOINTUPDATEASSO, association)
      .then(() => {
        notifySuccess("Le profil de l'association a été modifié.");
      })
      .catch(() => {
        notifyError("Une erreur est survenue lors de la mise à jour.");
      });
  };

  // changement de valeur
  function handleChange(event) {
    setAssociation({
      ...association,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <form
        className="backoffice_profilasso_form"
        method="PUT"
        onSubmit={updateAssociation}
      >
        <div className="backoffice-bloc">
          <label htmlFor="name" className="backoffice-input-half">
            <p>Nom</p>
            <input
              className="rules"
              type="text"
              name="nom"
              placeholder={association.nom}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="backoffice-bloc">
          <label htmlFor="email" className="backoffice-input-half">
            <p>Email</p>
            <input
              className="rules"
              type="text"
              name="email"
              placeholder={association.email}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="phone" className="backoffice-input-half">
            <p>Téléphone</p>
            <input
              className="rules"
              type="text"
              name="telephone"
              placeholder={association.telephone}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="adress" className="backoffice-input-half">
            <p>Adresse</p>
            <input
              className="rules"
              type="text"
              name="adresse"
              placeholder={association.adresse}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="backoffice-bloc">
          <label htmlFor="city" className="backoffice-input-half">
            <p>Ville</p>
            <input
              className="rules"
              type="email"
              name="ville"
              placeholder={association.ville}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="zip" className="backoffice-input-half">
            <p>Code Postal</p>
            <input
              className="rules"
              type="text"
              name="code_postal"
              placeholder={association.code_postal}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="backoffice_profilasso_submit_button">
          <button className="button-blue" type="submit">
            Modifier le profil de l'association
          </button>
        </div>
      </form>
      <ProfilStatusModification user={association} />
    </div>
  );
}
