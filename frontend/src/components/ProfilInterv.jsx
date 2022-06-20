import React from "react";

import "@style/App.css";
import "@style/ProfilInterv.css";

export default function ProfilInterv() {
  return (
    <div>
      <div className="firstLast">
        <div className="identity">
          <label htmlFor="name" className="regles">
            <p>Nom</p>
            <input
              className="rules"
              type="text"
              name="name"
              value="BENOIT Benoît"
            />
          </label>
        </div>

        <div className="firstname">
          <label htmlFor="firstname">
            <p>Prénom</p>
            <input className="rules" type="text" value="John" />
          </label>
        </div>
      </div>

      <div className="password">
        <label htmlFor="password">
          <p>Mot de Passe actuel</p>
          <input className="otherinput" type="text" value="" />
        </label>
      </div>

      <div className="secret">
        <label htmlFor="newPassword" className="regles">
          <p>Nouveau mot de Passe</p>
          <input className="otherinput" type="text" name="name" value="" />
        </label>
      </div>

      <div className="confirmedNewPassword">
        <label htmlFor="confirmedNewPassword">
          <p>Confirmer le nouveau mot de Passe</p>
          <input className="otherinput" type="text" value="" />
        </label>
      </div>

      <div className="localisation">
        <label htmlFor="address">
          <p>Adresse</p>
          <input
            className="otherinput"
            type="text"
            value="12 rue de la République"
          />
        </label>
      </div>

      <div className="codepostal">
        <div className="zip">
          <label htmlFor="zip">
            <p>Code Postal</p>
            <input className="rules" type="text" value="75000" />
          </label>
        </div>
        <div className="city">
          <label htmlFor="city">
            <p>Ville</p>
            <input className="rules" type="text" value="Paris" />
          </label>
        </div>
      </div>

      <div className="contact">
        <div className="mail">
          <label htmlFor="email">
            <p>Email</p>
            <input className="rules" type="email" value="yoyo@mail.com" />
          </label>
        </div>
        <div className="phone">
          <label htmlFor="phone">
            <p>Téléphone</p>
            <input className="rules" type="text" value="06 06 06 06 06" />
          </label>
        </div>
      </div>

      <div className="bouton">
        <button className="button-blue" type="button">
          Demander une modification
        </button>
      </div>
    </div>
  );
}
