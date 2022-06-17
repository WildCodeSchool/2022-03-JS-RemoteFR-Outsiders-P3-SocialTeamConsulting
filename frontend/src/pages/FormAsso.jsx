import React, { useState } from "react";
import axios from "axios";

import { notifySuccess, notifyError } from "@services/services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@style/Form.css";

export default function FormAsso() {
  const [buttonText, setButtonText] = useState("Envoyer ma pré-inscription");

  const [association, setAssociation] = useState({
    password: "",
    passCheck: "",
  });
  function handleChange(e) {
    setAssociation({
      ...association,
      [e.target.name]: e.target.value,
    });
  }

  const ENDPOINT = "http://localhost:5000/associations";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(ENDPOINT, association)
      .then(() => {
        if (association.password === association.passCheck) {
          setButtonText(
            "Merci, votre pré-inscription a bien été prise en compte"
          );

          notifySuccess(
            "Votre pré-inscription a été enregistrée. Un administrateur vous contactera bientôt pour vous informer de l'avancement de votre dossier"
          );
        } else {
          notifyError(
            "Votre pré-inscription n'a pas pu aboutir. Veuillez vérifier les champs à remplir avant de soumettre à nouveau votre pré-inscription"
          );
        }
      })
      .catch(() => {
        setButtonText(
          "Erreur, vérifier si toutes vos informations sont correctes"
        );
        notifyError(
          "Votre pré-inscription n'a pas pu aboutir. Veuillez vérifier les champs à remplir avant de soumettre à nouveau votre pré-inscription"
        );
      });
  };

  return (
    <div className="register">
      <div className="back">
        <form action="#" onSubmit={handleSubmit} method="post">
          <div className="register_form">
            <h1>Demande d'inscription pour les associations</h1>
            <div className="box_form">
              <div>
                <label htmlFor="form_asso_name">
                  <p>Nom de votre association</p>
                  <input
                    type="text"
                    id="form_asso_name"
                    required
                    placeholder="ex: ASSOCIATION LES VALLIERES"
                    onChange={handleChange}
                    name="nom"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="form_asso_email">
                  <p>Email</p>
                  <input
                    type="email"
                    id="form_asso_email"
                    required
                    placeholder="votreemail@gmail.com"
                    onChange={handleChange}
                    name="email"
                  />
                </label>
              </div>
            </div>
            <div className="box_form">
              <div>
                <label htmlFor="form_asso_mdp">
                  <p>Choisir un mot de passe</p>
                  <input
                    type="password"
                    name="password"
                    id="form_asso_mdp"
                    required
                    placeholder="********"
                    onChange={handleChange}
                    autoComplete="off"
                    value={association.password}
                  />
                </label>
              </div>

              <div>
                <label htmlFor="form_asso_mdp2">
                  <p>Retapez votre mot de passe</p>

                  <input
                    type="password"
                    name="passCheck"
                    id="form_asso_mdp2"
                    required
                    placeholder="********"
                    autoComplete="off"
                    value={association.passCheck}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="box_form">
              <div>
                <label htmlFor="form_asso_adresse">
                  <p>Adresse</p>
                  <input
                    type="text"
                    id="form_asso_adresse"
                    required
                    placeholder="3 rue du Limousin"
                    onChange={handleChange}
                    name="adresse"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="form_asso_code_postale">
                  <p>Code Postale</p>
                  <input
                    type="text"
                    id="form_asso_code_postale"
                    required
                    placeholder="33000"
                    onChange={handleChange}
                    name="code_postal"
                  />
                </label>
              </div>
            </div>
            <div className="box_form">
              <div>
                <label htmlFor="form_asso_ville">
                  <p>Ville</p>
                  <input
                    type="text"
                    id="form_asso_ville"
                    required
                    placeholder="Bordeaux"
                    onChange={handleChange}
                    name="ville"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="form_asso_tel">
                  <p>Téléphone</p>
                  <input
                    type="text"
                    id="form_asso_tel"
                    required
                    placeholder="0772980819"
                    onChange={handleChange}
                    name="telephone"
                  />
                </label>
              </div>
            </div>
            <div className="form_textarea">
              <label htmlFor="form_message">
                <p>Votre message</p>

                <textarea
                  id="form_message"
                  name="pre_inscription_message"
                  required
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="submit_button">
              <button type="submit" className="button-blue">
                {" "}
                {buttonText}
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
