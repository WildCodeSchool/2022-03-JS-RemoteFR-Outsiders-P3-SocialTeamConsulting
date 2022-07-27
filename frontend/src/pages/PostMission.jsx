import React, { useEffect, useState, useContext } from "react";
import metiers from "@services/metiers.json";
import { notifySuccess, notifyError, api } from "@services/services";
import "../style/PostMission.css";
import ExportContext from "../contexts/Context";

function PostMission() {
  const { infoUser } = useContext(ExportContext.Context);
  const [mission, setMissions] = useState({});
  const [assoID, setAssoID] = useState("");

  const ENDPOINTASSOCIATION = "/associations";
  useEffect(() => {
    /*
     ** UseEffect to load the id of the association
     ** id is needed to api.post "/missions"
     */
    api
      .get(ENDPOINTASSOCIATION)
      .then((res) => {
        setAssoID(
          res.data.filter((thisUser) => thisUser.email === infoUser.email)[0].id
        );
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, []);

  function handleChange(e) {
    setMissions({
      ...mission,
      [e.target.name]: e.target.value,
      associations_id: assoID,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const ENDPOINT = "/missions";
    api
      .post(ENDPOINT, mission)
      .then(() => {
        notifySuccess("Votre mission été postée.");
        e.target.reset();
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
                  placeholder="Recherche travailleur social"
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
                  {metiers.map((metier) => {
                    return (
                      <option value={metier.metier} name="metier">
                        {`${metier.metier} `}
                      </option>
                    );
                  })}
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
