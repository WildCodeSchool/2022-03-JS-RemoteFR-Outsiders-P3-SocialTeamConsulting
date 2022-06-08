import React from "react";
import { NavLink } from "react-router-dom";

import "@style/App.css";
import "@style/AccueilAsso.css";

export default function AccueilIntervenant() {
  return (
    <div>
      <header>
        <h1>Intervenant</h1>
      </header>
      <div className="presentationText">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          molestias quisquam eum laboriosam mollitia voluptates! Accusantium
          pariatur ipsum accusamus laboriosam quam aspernatur, perferendis
          magniquod non qui unde eligendi ipsa.
        </p>
      </div>
      <div className="data">
        <div className="keyData" />
        <div className="keyData" />
        <div className="keyData" />
      </div>
      <div className="joinUs">
        <NavLink to="/FormulaireIntervenant">
          <input
            id="button_preinscription"
            className="button-blue"
            value="Nous rejoindre"
          />
        </NavLink>
      </div>
    </div>
  );
}
