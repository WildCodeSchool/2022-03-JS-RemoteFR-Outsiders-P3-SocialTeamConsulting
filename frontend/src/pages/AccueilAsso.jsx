import React from "react";
import { NavLink } from "react-router-dom";

import "@style/App.css";
import "@style/AccueilAsso.css";

export default function AccueilAsso() {
  return (
    <div>
      <header>
        <h1>Association</h1>
      </header>
      <div className="presentationText">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          molestias quisquam eum laboriosam mollitia voluptates! Accusantium
          pariatur ipsum accusamus laboriosam quam aspernatur, perferendis magni
          quod non qui unde eligendi ipsa.
        </p>
      </div>
      <div className="data">
        <div className="keyData" />
        <div className="keyData" />
        <div className="keyData" />
      </div>
      <div className="contactUsjoinUs">
        <div>
          <NavLink to="/formulaire_contact_association">
            <button
              type="button"
              id="button_preinscription"
              className="button-blue"
            >
              Nous contacter
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/formulaire_association">
            <button
              type="button"
              id="button_preinscription"
              className="button-blue"
            >
              Nous rejoindre
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
