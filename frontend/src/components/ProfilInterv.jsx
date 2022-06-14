import React from "react";

import "@style/App.css";
import "@style/ProfilInterv.css";

export default function ProfilInterv() {
  return (
    <div className="profil">
      <div className="identity">
        <label htmlFor="identity">
          <p>Nom Prénom</p>
          <input type="text" value="BENOIT Benoît" />
        </label>
      </div>

      <div className="company">
        <label htmlFor="company">
          <p>SIREN/SIRET</p>
          <input type="text" value="RFA00009877" />
        </label>
      </div>

      <div className="address">
        <label htmlFor="address">
          <p>Adresse</p>
          <input type="text" value="12 rue de 00000 Ville" />
        </label>
      </div>

      <div className="email">
        <label htmlFor="email">
          <p>Email</p>
          <input type="email" value="yoyo@mail.com" />
        </label>
      </div>

      <div className="phone">
        <label htmlFor="phone">
          <p>Téléphone</p>
          <input type="text" value="06 06 06 06 06" />
        </label>
      </div>

      <div className="buttonModif">
        <input
          type="text"
          className="button-blue"
          value="Demander une modification"
        />
      </div>
    </div>
  );
}
