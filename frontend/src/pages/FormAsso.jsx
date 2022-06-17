import React, { useState } from "react";
import "@style/Form.css";

export default function FormAsso() {
  const [password, setPassword] = useState("");
  const [passCheck, setPassCheck] = useState("");
  const [buttonText, setButtonText] = useState("Envoyer ma pré-inscription");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === passCheck) {
      setButtonText("Merci, votre pré-inscription a bien été prise en compte");
    } else {
      setButtonText(
        "Erreur, vérifier si toutes vos informations sont correctes"
      );
    }
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
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                    value={password}
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
                    onChange={(e) => setPassCheck(e.target.value)}
                    autoComplete="off"
                    value={passCheck}
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
                  />
                </label>
              </div>
            </div>
            <div className="form_textarea">
              <label htmlFor="form_message">
                <p>Votre message</p>

                <textarea id="form_message" required />
              </label>
            </div>
            <div className="submit_button">
              <input type="submit" className="button-blue" value={buttonText} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
