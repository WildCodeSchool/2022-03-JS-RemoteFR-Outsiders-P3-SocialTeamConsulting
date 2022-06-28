import React, { useState } from "react";
import "../style/PostMission.css";

import { notifySuccess, notifyError, api } from "@services/services";

function PostMission() {
  const [mission, setMissions] = useState({});
  const assoID = "18679c5f-dc33-475e-8630-45c971d38cab";
  function handleChange(e) {
    setMissions({
      ...mission,
      [e.target.name]: e.target.value,
      associations_id: assoID,
    });
  }

  const ENDPOINT = "/missions";
  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post(ENDPOINT, mission)
      .then(() => {
        notifySuccess("Votre mission été postée.");
      })
      .catch(() => {
        notifyError(
          "L'envoie de votre mission n'a pas pu aboutir. Veuillez vérifier les champs à remplir avant de soumettre à nouveau votre mission."
        );
      });
  };

  return (
    <div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <div className="">
          <h1>Créer une mission</h1>
          <div className="">
            <div>
              <label htmlFor="post_mission_intitule">
                <p>Nom de la mission</p>
                <input
                  type="text"
                  id="post_mission_intitule"
                  required
                  placeholder="Nous recherchons un travailleur social"
                  name="intitule"
                  onChange={handleChange}
                />
              </label>
            </div>

            <label
              htmlFor="post_mission_adresse"
              className="backoffice-input-half"
            >
              <p>Adresse</p>
              <input
                type="text"
                id="post_mission_adresse"
                required
                placeholder="3 rue jules verne"
                name="adresse"
                onChange={handleChange}
              />
            </label>
            <div className="backoffice-bloc">
              <label
                htmlFor="post_mission_c-postal"
                className="backoffice-input-half"
              >
                <p>Code postal</p>
                <input
                  type="text"
                  id="post_mission_c-postal"
                  required
                  placeholder="63000"
                  name="code_postal"
                  onChange={handleChange}
                />
              </label>
              <label
                htmlFor="post_mission_ville"
                className="backoffice-input-half"
              >
                <p>Ville</p>
                <input
                  type="text"
                  id="post_mission_ville"
                  required
                  placeholder="Clermont-fd"
                  name="ville"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <div className="backoffice-bloc">
                <label
                  htmlFor="post_mission_date-deb"
                  className="backoffice-input-half"
                >
                  <p>Date debut</p>
                  <input
                    type="date"
                    id="post_mission_date-deb"
                    required
                    name="date_debut"
                    onChange={handleChange}
                  />
                </label>
                <label
                  htmlFor="post_mission_date-fin"
                  className="backoffice-input-half"
                >
                  <p>Date fin</p>
                  <input
                    type="date"
                    id="post_mission_date-fin"
                    required
                    name="date_fin"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="backoffice-bloc">
                <label
                  htmlFor="post_mission_horaire_debut"
                  className="backoffice-input-half"
                >
                  <p>Horaires debut</p>
                  <input
                    type="time"
                    id="post_mission_horaire_debut"
                    required
                    placeholder="8h"
                    name="horaire_debut"
                    onChange={handleChange}
                  />
                </label>
                <label
                  htmlFor="post_mission_horaire-fin"
                  className="backoffice-input-half"
                >
                  <p>Horaires fin</p>
                  <input
                    type="time"
                    id="post_mission_horaire-fin"
                    required
                    placeholder="17h"
                    name="horaire_fin"
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="post-mission-job">
                <select id="job_select" name="metier" onChange={handleChange}>
                  <option value="">--Choisir un type de travail--</option>
                  <option value="moniteurs" name="metier">
                    moniteurs{" "}
                  </option>
                  <option value="éducateurs" name="metier">
                    éducateurs
                  </option>
                  <option value="éducateurs spécialisé" name="metier">
                    éducateurs spécialisé
                  </option>
                  <option value="assistante de service social" name="metier">
                    assistante de service social
                  </option>
                  <option
                    value="conseillère en économie social et familiale"
                    name="metier"
                  >
                    conseillère en économie social et familiale
                  </option>
                  <option value="chef de service" name="metier">
                    chef de service
                  </option>
                  <option value="Autre" name="metier">
                    Autre
                  </option>
                </select>

                <label htmlFor="post_mission_horaire-totale">
                  <p>Horaires totales travaillées</p>
                  <input
                    type="number"
                    id="post_mission_horaire-totale"
                    required
                    placeholder="35h"
                    name="total_heure"
                    className="backoffice-input-half"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="post_mission_desc">
                  <p>DESCRIPTION</p>
                  <textarea
                    type="text"
                    id="post_mission_desc"
                    required
                    placeholder="contenu de la mission"
                    name="description"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="submit_button">
              <button type="submit" className="button-blue">
                Envoyer la mission
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostMission;