import React, { useState } from "react";
import axios from "axios";
import "@style/Form.css";
import { notifySuccess } from "@services/services";

function FormAssoContact() {
  const [messageValue, setMessageValue] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleSubmitMessage = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/messages/", {
        nom: messageValue.nom,
        email: messageValue.email,
        telephone: messageValue.telephone,
        message: messageValue.message,
      })
      .then(
        notifySuccess(
          "Votre message a bien été envoyé. Un administrateur vous contactera bientôt."
        )
      );
  };

  const handleChangeMessage = (event) => {
    setMessageValue({
      ...messageValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="register_asso">
      <div className="back">
        <form onSubmit={handleSubmitMessage}>
          <div className="register_form">
            <h1>
              Vous êtes une association et vous <br />
              souhaitez nous contacter ?
            </h1>
            <h1>Nous vous invitons à remplir ce formulaire</h1>
            <div>
              <label htmlFor="asso_name">
                <p>Nom de votre association</p>
                <input
                  type="text"
                  id="asso_name"
                  name="nom"
                  value={messageValue.nom}
                  onChange={handleChangeMessage}
                />
              </label>
            </div>
            <div>
              <label htmlFor="asso_email">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  id="asso_email"
                  value={messageValue.email}
                  onChange={handleChangeMessage}
                />
              </label>
            </div>
            <div>
              <label htmlFor="asso_tel">
                <p>Téléphone</p>
                <input
                  type="text"
                  id="asso_tel"
                  name="telephone"
                  value={messageValue.telephone}
                  onChange={handleChangeMessage}
                />
              </label>
            </div>
            <div className="form_textarea">
              <label htmlFor="message">
                <p>Votre message</p>

                <textarea
                  id="message"
                  name="message"
                  value={messageValue.message}
                  onChange={handleChangeMessage}
                />
              </label>
            </div>
            <div className="submit_button">
              <input
                type="submit"
                className="button-blue"
                value="Envoyer le message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormAssoContact;
