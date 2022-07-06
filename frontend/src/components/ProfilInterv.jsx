import React, { useEffect, useState } from "react";
import { notifySuccess, api } from "@services/services";

import "@style/App.css";
import "@style/ProfilInterv.css";

export default function ProfilInterv() {
  const [intervenant, setIntervenant] = useState({});
  const emailIntervenant = "ironman@starkco.com";

  useEffect(() => {
    const ENDPOINT = `/intervenants/email/${emailIntervenant}`;
    api.get(ENDPOINT).then((result) => {
      setIntervenant(result.data);
    });
  }, []);

  // On veut mettre a jour les informations d'un intervenant

  const updateIntervenant = (e) => {
    e.preventDefault();
    const ENDPOINTUPDATEINTER = `/intervenants/${intervenant.id}`;
    api.put(ENDPOINTUPDATEINTER).then(() => {
      console.warn("it's working");
      notifySuccess("Vous venez de choisir un intervenant.");
      setIntervenant();
    });
  };

  // changement de valeur
  const handleChange = () => {
    setIntervenant({ ...intervenant });
  };

  return (
    // <div className="backoffice-bloc">
    //     <p>Nom</p>
    //     <p>{intervenant.nom}
    //     </p>
    //     <p>Prénom</p>
    //     <p>{intervenant.prenom}
    //     </p>
    //     <p>{intervenant.email}</p>
    //     <p>{intervenant.telephone}
    //     </p>
    // </div>

    <form
      className="backoffice_profilinterv_form"
      method="PUT"
      onSubmit={updateIntervenant}
    >
      <div className="backoffice-bloc">
        <label htmlFor="name" className="backoffice-input-half">
          <p>Nom</p>
          <input
            className="rules"
            type="text"
            name="name"
            placeholder={intervenant.nom}
            onChange={() => handleChange}
          />
        </label>
        <label htmlFor="firstname" className="backoffice-input-half">
          <p>Prénom</p>
          <input
            className="rules"
            type="text"
            placeholder={intervenant.prenom}
            onChange={() => handleChange}
          />
        </label>
      </div>

      <label htmlFor="password">
        <p>Mot de Passe actuel</p>
        <input
          className="otherinput"
          type="text"
          placeholder=""
          onChange={() => handleChange}
        />
      </label>

      <div className="backoffice-bloc">
        <label htmlFor="newPassword" className="backoffice-input-half">
          <p>Nouveau mot de Passe</p>
          <input
            className="otherinput"
            type="text"
            name="name"
            placeholder=""
            onChange={() => handleChange}
          />
        </label>
        <label htmlFor="confirmedNewPassword">
          <p>Confirmer le nouveau mot de Passe</p>
          <input
            className="otherinput"
            type="text"
            placeholder=""
            onChange={() => handleChange}
          />
        </label>
      </div>

      <label htmlFor="address">
        <p>Adresse</p>
        <input
          className="otherinput"
          type="text"
          placeholder={intervenant.adresse}
          onChange={() => handleChange}
        />
      </label>

      <div className="backoffice-bloc">
        <label htmlFor="zip" className="backoffice-input-half">
          <p>Code Postal</p>
          <input
            className="rules"
            type="text"
            placeholder={intervenant.code_postal}
            onChange={() => handleChange}
          />
        </label>
        <label htmlFor="city" className="backoffice-input-half">
          <p>Ville</p>
          <input
            className="rules"
            type="text"
            placeholder={intervenant.ville}
            onChange={() => handleChange}
          />
        </label>
      </div>

      <div className="backoffice-bloc">
        <label htmlFor="email" className="backoffice-input-half">
          <p>Email</p>
          <input
            className="rules"
            type="email"
            placeholder={intervenant.email}
            onChange={() => handleChange}
          />
        </label>
        <label htmlFor="phone" className="backoffice-input-half">
          <p>Téléphone</p>
          <input
            className="rules"
            type="text"
            placeholder={intervenant.telephone}
            onChange={() => handleChange}
          />
        </label>
      </div>

      <div className="backoffice_profilinterv_submit_button">
        <button className="button-blue" type="submit">
          Demander une modification
        </button>
      </div>
    </form>
  );
}
