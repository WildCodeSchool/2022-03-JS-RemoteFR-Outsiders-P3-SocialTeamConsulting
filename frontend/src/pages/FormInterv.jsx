import React, { useState } from "react";
import axios from "axios";

import { FaCloudUploadAlt } from "react-icons/fa";
import "@style/Form.css";

import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyError } from "@services/services";
import "react-toastify/dist/ReactToastify.css";

function FormInterv() {
  const [buttonText, setButtonText] = useState("Envoyer ma pré-inscription");

  const [intervenant, setIntervenant] = useState({
    image_cv: "cv",
    image_carte_vitale: "carte vitale",
    image_statut_autoentrepreneur: "autoentrepreneur",
    password: "",
    passCheck: "",
  });
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

  function handleChange(event) {
    setIntervenant({
      ...intervenant,
      [event.target.name]: event.target.value,
    });
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

  const ENDPOINT = "http://localhost:5000/intervenants";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(ENDPOINT, intervenant)
      .then(() => {
        if (intervenant.password === intervenant.passCheck) {
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
        <form onSubmit={handleSubmit} method="post">
          <div className="register_form">
            <h1>{`Demande d'inscription pour les intervenants`}</h1>
            <div className="box_form">
              <div>
                <label htmlFor="interv_nom">
                  <p>Nom</p>

                  <input
                    type="text"
                    id="interv_nom"
                    name="nom"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div>
                <label htmlFor="interv_prenom">
                  <p>Prénom</p>

                  <input
                    type="text"
                    id="interv_prenom"
                    name="prenom"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>

            <div className="box_form">
              <div>
                <label htmlFor="interv_email">
                  <p>Email</p>

                  <input
                    type="email"
                    id="interv_email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div>
                <label htmlFor="interv_tel">
                  <p>Téléphone</p>

                  <input
                    type="text"
                    id="interv_tel"
                    name="telephone"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>

            <div className="box_form">
              <div>
                <label htmlFor="interv_mdp">
                  <p>Choisir un mot de passe</p>
                  <input
                    type="password"
                    name="password"
                    id="interv_mdp"
                    required
                    placeholder="********"
                    onChange={handleChange}
                    autoComplete="off"
                    value={intervenant.password}
                  />
                </label>
              </div>

              <div>
                <label htmlFor="interv_mdp">
                  <p>Retapez votre mot de passe</p>

                  <input
                    type="password"
                    name="passCheck"
                    id="interv_mdp2"
                    required
                    placeholder="********"
                    onChange={handleChange}
                    autoComplete="off"
                    value={intervenant.passCheck}
                  />
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
                  required
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
                  required
                />
              </label>

              <div>
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
                    required
                  />
                </label>
              </div>
            </div>
            <div className="form_textarea">
              <label htmlFor="message">
                <p>Votre message</p>
                <textarea
                  id="message"
                  name="pre_inscription_message"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="submit_button">
              <button
                id="button_preinscription"
                className="button-blue"
                type="submit"
                required
              >
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

export default FormInterv;
