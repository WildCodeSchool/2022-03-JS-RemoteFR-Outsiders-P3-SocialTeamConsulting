import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaCloudUploadAlt } from "react-icons/fa";
import "@style/Form.css";

import { notifySuccess, notifyError, api } from "@services/services";
import "react-toastify/dist/ReactToastify.css";

function FormInterv() {
  const [buttonText, setButtonText] = useState("Envoyer ma pré-inscription");
  const [intervenant, setIntervenant] = useState();
  const navigate = useNavigate();

  function handleChange(event, type) {
    // Is used on each input.
    // In case of file, directly add the file in the state
    // Else, add the value of the input
    if (type === "file") {
      setIntervenant({
        ...intervenant,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setIntervenant({
        ...intervenant,
        [event.target.name]: event.target.value,
      });
    }
  }

  function isDocSend(thisFile) {
    // Is used on each file input
    // Show a green light or a red light to the user
    if (
      intervenant !== undefined &&
      typeof intervenant[thisFile] !== "undefined"
    ) {
      return <div className="green">{intervenant[thisFile].name}</div>;
    }
    return (
      <div className="red">{`Vous n'avez pas encore ajouté de fichier`}</div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ENDPOINT = "/intervenants";
    const formData = new FormData();
    /* eslint-disable */
    for (let clef in intervenant) {
      formData.append(clef, intervenant[clef]);
    }
    /* eslint-enable */
    if (intervenant.password !== intervenant.passCheck) {
      notifyError(
        "Votre pré-inscription n'a pas pu aboutir. Votre confirmation de mot de passe ne correspond pas au mot de passe entré."
      );
    } else {
      api
        .post(ENDPOINT, formData)
        .then(() => {
          setButtonText(
            "Merci, votre pré-inscription a bien été prise en compte"
          );
          notifySuccess(
            "Votre pré-inscription a été enregistrée. Un administrateur vous contactera bientôt pour vous informer de l'avancement de votre dossier"
          );
        })
        .catch(() => {
          setButtonText(
            "Erreur, vérifier si toutes vos informations sont correctes"
          );
          notifyError(
            "Votre pré-inscription n'a pas pu aboutir. Veuillez vérifier les champs à remplir avant de soumettre à nouveau votre pré-inscription"
          );
        });
    }
    navigate("/");
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
                    onChange={handleChange}
                    autoComplete="off"
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
                    onChange={handleChange}
                    autoComplete="off"
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
                {isDocSend("AutoE")}
                <input
                  id="upload_statut_ae"
                  type="file"
                  name="AutoE"
                  onChange={(e) => {
                    handleChange(e, "file");
                  }}
                  className="inputfile"
                  required
                />
              </label>

              <label htmlFor="upload_carte_vitale" className="btn">
                <p>Une copie de votre carte vitale</p>
                <div>
                  <FaCloudUploadAlt className="upload_icon" />
                </div>
                {isDocSend("CarteVitale")}
                <input
                  id="upload_carte_vitale"
                  type="file"
                  name="CarteVitale"
                  onChange={(e) => {
                    handleChange(e, "file");
                  }}
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
                  {isDocSend("CV")}
                  <input
                    id="upload_cv"
                    type="file"
                    name="CV"
                    onChange={(e) => {
                      handleChange(e, "file");
                    }}
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
    </div>
  );
}

export default FormInterv;
