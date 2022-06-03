import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "@style/Form.css";

function FormInterv() {
  const [fileAutoE, setFileAutoE] = useState(false);
  const [fileCarteVitale, setFileCarteVitale] = useState(false);
  const [fileCv, setFileCv] = useState(false);

  function handleChangeAutoEntr(event) {
    setFileAutoE(event.target.files[0]);
  }

  function handleChangeCarteVitale(event) {
    setFileCarteVitale(event.target.files[0]);
  }

  function handleChangeCv(event) {
    setFileCv(event.target.files[0]);
  }

  function noFile() {
    return (
      <div className="red">{`Vous n'avez pas encore ajouté de fichier`}</div>
    );
  }

  function fooAutoEntr() {
    return <div className="green">{fileAutoE.name}</div>;
  }

  function fooCarteVitale() {
    return <div className="green">{fileCarteVitale.name}</div>;
  }

  function fooCv() {
    return <div className="green">{fileCv.name}</div>;
  }

  return (
    <div className="register">
      <div className="back">
        <form action="#">
          <div className="register_form">
            <h1>{`Demande d'inscription pour les intervenants`}</h1>
            <div className="box_form">
              <div className="form_nom">
                <label htmlFor="interv_nom">
                  <p>Nom</p>

                  <input type="text" id="interv_nom" />
                </label>
              </div>

              <div className="form_prenom">
                <label htmlFor="interv_prenom">
                  <p>Prénom</p>

                  <input type="text" id="interv_prenom" />
                </label>
              </div>
            </div>

            <div className="box_form">
              <div className="form_email">
                <label htmlFor="interv_email">
                  <p>Email</p>

                  <input type="text" id="interv_email" />
                </label>
              </div>

              <div className="form_telephone">
                <label htmlFor="interv_tel">
                  <p>Téléphone</p>

                  <input type="text" id="interv_tel" />
                </label>
              </div>
            </div>

            <div className="box_form">
              <div className="form_password">
                <label htmlFor="interv_mdp">
                  <p>Choix un mot de passe</p>
                  <input type="password" id="interv_mdp" />
                </label>
              </div>

              <div className="form_check_password">
                <label htmlFor="interv_mdp">
                  <p>Retapez votre mot de passe</p>

                  <input type="password" id="interv_mdp" />
                </label>
              </div>
            </div>

            <div className="form_upload">
              <h2>
                Merci de nous transmettre via ce formulaire les pièces
                justificatives suivantes :
              </h2>

              <label htmlFor="upload_statut_ae" className="btn">
                <p>{`Une copie de votre statut d'autoentrepreneur`}</p>
                <div>
                  <FaCloudUploadAlt className="upload_icon" />
                </div>
                {fileAutoE ? fooAutoEntr() : noFile()}
                <input
                  id="upload_statut_ae"
                  type="file"
                  onChange={handleChangeAutoEntr}
                  className="inputfile"
                />
              </label>

              <label htmlFor="upload_carte_vitale" className="btn">
                <p>Une copie de votre carte vitale</p>
                <div>
                  <FaCloudUploadAlt className="upload_icon" />
                </div>
                {fileCarteVitale ? fooCarteVitale() : noFile()}
                <input
                  id="upload_carte_vitale"
                  type="file"
                  onChange={handleChangeCarteVitale}
                  className="inputfile"
                />
              </label>

              <label htmlFor="upload_cv" className="btn">
                <p>Votre CV</p>
                <div>
                  <FaCloudUploadAlt className="upload_icon" />
                </div>
                {fileCv ? fooCv() : noFile()}
                <input
                  id="upload_cv"
                  type="file"
                  onChange={handleChangeCv}
                  className="inputfile"
                />
              </label>
            </div>
            <div className="form_textarea">
              <label htmlFor="message">
                <p>Votre message</p>
                <textarea id="message" />
              </label>
            </div>
            <div className="submit_button">
              <input
                id="button_preinscription"
                className="button-blue"
                value="Envoyer la pré-inscription"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormInterv;
