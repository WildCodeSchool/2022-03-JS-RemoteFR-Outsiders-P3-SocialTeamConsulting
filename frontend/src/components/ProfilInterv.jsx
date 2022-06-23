import React, { useEffect, useState } from "react";
import { api } from "@services/services";

import "@style/App.css";
import "@style/ProfilInterv.css";

export default function ProfilInterv() {
  const [intervenant, setIntervenant] = useState({});
  const emailIntervenant = "batman@wayneco.com";
  const ENDPOINT = `/intervenants/email/${emailIntervenant}`;

  useEffect(() => {
    api.get(ENDPOINT).then((result) => {
      setIntervenant(result.data);
    });
  }, []);

  return (
    <form className="backoffice_profilinterv_form">
      <div className="backoffice-bloc">
        <label htmlFor="name" className="backoffice-input-half">
          <p>Nom</p>
          <input
            className="rules"
            type="text"
            name="name"
            placeholder={intervenant.nom}
          />
        </label>
        <label htmlFor="firstname" className="backoffice-input-half">
          <p>Prénom</p>
          <input
            className="rules"
            type="text"
            placeholder={intervenant.prenom}
          />
        </label>
      </div>

      <label htmlFor="password">
        <p>Mot de Passe actuel</p>
        <input className="otherinput" type="text" placeholder="" />
      </label>

      <div className="backoffice-bloc">
        <label htmlFor="newPassword" className="backoffice-input-half">
          <p>Nouveau mot de Passe</p>
          <input
            className="otherinput"
            type="text"
            name="name"
            placeholder=""
          />
        </label>
        <label htmlFor="confirmedNewPassword">
          <p>Confirmer le nouveau mot de Passe</p>
          <input className="otherinput" type="text" placeholder="" />
        </label>
      </div>

      <label htmlFor="address">
        <p>Adresse</p>
        <input
          className="otherinput"
          type="text"
          placeholder={intervenant.adresse}
        />
      </label>

      <div className="backoffice-bloc">
        <label htmlFor="zip" className="backoffice-input-half">
          <p>Code Postal</p>
          <input
            className="rules"
            type="text"
            placeholder={intervenant.code_postal}
          />
        </label>
        <label htmlFor="city" className="backoffice-input-half">
          <p>Ville</p>
          <input
            className="rules"
            type="text"
            placeholder={intervenant.ville}
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
          />
        </label>
        <label htmlFor="phone" className="backoffice-input-half">
          <p>Téléphone</p>
          <input
            className="rules"
            type="text"
            placeholder={intervenant.telephone}
          />
        </label>
      </div>

      <div className="backoffice_profilinterv_submit_button">
        <button className="button-blue" type="submit" required>
          Demander une modification
        </button>
      </div>
    </form>
  );
}
