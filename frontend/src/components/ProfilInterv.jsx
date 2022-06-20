import React from "react";

import "@style/App.css";
import "@style/ProfilInterv.css";

export default function ProfilInterv() {
  return (
    <form className="backoffice_profilinterv_form">
      <div className="backoffice-bloc">
        <label htmlFor="name" className="backoffice-input-half">
          <p>Nom</p>
          <input
            className="rules"
            type="text"
            name="name"
            placeholder="Benoît"
          />
        </label>
        <label htmlFor="firstname" className="backoffice-input-half">
          <p>Prénom</p>
          <input className="rules" type="text" placeholder="John" />
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
          placeholder="12 rue de la République"
        />
      </label>

      <div className="backoffice-bloc">
        <label htmlFor="zip" className="backoffice-input-half">
          <p>Code Postal</p>
          <input className="rules" type="text" placeholder="75000" />
        </label>
        <label htmlFor="city" className="backoffice-input-half">
          <p>Ville</p>
          <input className="rules" type="text" placeholder="Paris" />
        </label>
      </div>

      <div className="backoffice-bloc">
        <label htmlFor="email" className="backoffice-input-half">
          <p>Email</p>
          <input className="rules" type="email" placeholder="yoyo@mail.com" />
        </label>
        <label htmlFor="phone" className="backoffice-input-half">
          <p>Téléphone</p>
          <input className="rules" type="text" placeholder="06 06 06 06 06" />
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
