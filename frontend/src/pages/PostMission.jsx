import React from "react";
import "../style/PostMission.css";

function PostMission() {
  return (
    <div>
      <form action="#" method="post">
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
                  />
                </label>
              </div>

              <div className="post-mission-job">
                {/* <label for="job_select">Poste general:</label> */}

                <select name="pets" id="job_select">
                  <option value="">--Choisir un type de travail--</option>
                  <option value="moniteurs">moniteurs </option>
                  <option value="éducateurs">éducateurs</option>
                  <option value="éducateursspécialisé">
                    éducateurs spécialisé
                  </option>
                  <option value="assistantedeservicesocial">
                    assistante de service social
                  </option>
                  <option value="conseillèreenéconomiesocialetfamiliale">
                    conseillère en économie social et familiale
                  </option>
                  <option value="chefdeservice">chef de service</option>
                  <option value="Autre">Autre</option>
                </select>

                <label htmlFor="post_mission_horaire-totale">
                  <p>Horaires totales travaillées</p>
                  <input
                    type="number"
                    id="post_mission_horaire-totale"
                    required
                    placeholder="35h"
                    name="email"
                    className="backoffice-input-half"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="post_mission_desc">
                  <p>DESCRIPTION</p>
                  <input
                    type="email"
                    id="post_mission_desc"
                    required
                    placeholder="contenu de la mission"
                    name="email"
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
