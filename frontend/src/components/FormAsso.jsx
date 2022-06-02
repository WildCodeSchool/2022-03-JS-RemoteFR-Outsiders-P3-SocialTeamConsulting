import React from "react";

function FormAsso() {
  return (
    <div className="register_asso">
      <div className="back">
        <form action="#">
          <div className="register_form">
            <h1>
              Vous êtes une association et vous <br /> souhaitez nous rejoindre
              ?
            </h1>
            <h1>Nous vous invitons à remplir ce formulaire</h1>
            <div>
              <label htmlFor="asso_name">
                Nom de votre association <br />
                <input type="text" id="asso_name" />
              </label>
            </div>
            <div>
              <label htmlFor="asso_email">
                Email
                <br />
                <input type="text" id="asso_email" />
              </label>
            </div>
            <div>
              <label htmlFor="asso_tel">
                Téléphone <br />
                <input type="text" id="asso_tel" />
              </label>
            </div>
            <div className="form_textarea">
              <label htmlFor="message">
                Votre message
                <br />
                <textarea id="message" />
              </label>
            </div>
            <div className="submit_button">
              <input
                type="submit"
                className="button-blue"
                value="Envoyer la pré-inscription"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormAsso;
