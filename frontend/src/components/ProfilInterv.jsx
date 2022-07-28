import React, { useEffect, useState } from "react";
import download from "downloadjs";
import { notifySuccess, notifyError, api } from "@services/services";
import { useLocation } from "react-router-dom";
import ProfilStatusModification from "./ProfilStatusModification";

import "@style/App.css";
import "@style/ProfilInterv.css";

export default function ProfilInterv() {
  const { state } = useLocation();
  const { email } = state;
  const [intervenant, setIntervenant] = useState({});
  const [imageCV, setImageCV] = useState("");
  const [ImageAuto, setImageAuto] = useState("");
  const [ImageCarteVitale, setImageCarteVitale] = useState("");

  useEffect(() => {
    const ENDPOINT = `/intervenants/bymail/${email}`;
    api.get(ENDPOINT).then((result) => {
      setIntervenant(result.data[0]);
    });
  }, []);

  useEffect(() => {
    const ENDPOINTPATHCV = `/intervenants/findpath/${intervenant.image_cv}`;
    const ENDPOINTPATHAUTO = `/intervenants/findpath/${intervenant.image_statut_autoentrepreneur}`;
    const ENDPOINTPATHVITALE = `/intervenants/findpath/${intervenant.image_carte_vitale}`;

    const promiseCV = api.get(ENDPOINTPATHCV);
    const promiseAUTO = api.get(ENDPOINTPATHAUTO);
    const promiseVITALE = api.get(ENDPOINTPATHVITALE);

    Promise.all([promiseCV, promiseAUTO, promiseVITALE]).then((data) => {
      /*
       ** localhost cannot be load due to security issues.
       ** load fake data when use with localhost
       */
      if (import.meta.env.VITE_BACKEND_URL === "http://localhost:5000") {
        setImageCV(
          "https://modele-cv.org/wp-content/uploads/doc-builder/cv/miniatures/cv-15-blue.jpg"
        );
        setImageAuto(
          "https://sp-formation.com/wp-content/uploads/2018/06/AGEFICE-Attestation-de-versement-ME-CFP-2018-318x450.jpg"
        );
        setImageCarteVitale(
          "https://secu-jeunes.fr/wp-content/uploads/2016/09/Carte_Vitale_Une.jpg"
        );
      } else {
        setImageCV(
          `${import.meta.env.VITE_BACKEND_URL}/uploads/${data[0].data.path}`
        );
        setImageAuto(
          `${import.meta.env.VITE_BACKEND_URL}/uploads/${data[1].data.path}`
        );
        setImageCarteVitale(
          `${import.meta.env.VITE_BACKEND_URL}/uploads/${data[2].data.path}`
        );
      }
    });
  }, [intervenant]);

  const updateIntervenant = (e) => {
    e.preventDefault();
    const ENDPOINTUPDATEINTER = `/intervenants/${intervenant.id}`;
    api
      .put(ENDPOINTUPDATEINTER, intervenant)
      .then(() => {
        notifySuccess("Le profil de l'intervenant a été modifié.");
      })
      .catch(() => {
        notifyError("Une erreur est survenue lors de la mise à jour.");
      });
  };

  function handleChange(event) {
    setIntervenant({
      ...intervenant,
      [event.target.name]: event.target.value,
    });
  }

  const downloadImage = (image) => {
    const extension = image.split(".")[1];
    const ENDPOINT = `/intervenants/download/${image}`;
    api
      .get(ENDPOINT, { responseType: "blob" })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        return new Blob([data]);
      })
      .then((blob) => {
        download(blob, `${image}`, `image/${extension}`);
      });
  };

  return (
    <div>
      <form
        className="backoffice_profilinterv_form"
        method="PUT"
        onSubmit={updateIntervenant}
      >
        <div className="backoffice-bloc">
          <label htmlFor="name" className="backoffice-input-half">
            <p className="bold">Nom</p>
            <input
              className="rules"
              type="text"
              name="nom"
              placeholder={intervenant.nom}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="firstname" className="backoffice-input-half">
            <p className="bold">Prénom</p>
            <input
              className="rules"
              type="text"
              name="prenom"
              placeholder={intervenant.prenom}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="backoffice-bloc">
          <label htmlFor="email" className="backoffice-input-half">
            <p className="bold">Email</p>
            <input
              className="rules"
              type="email"
              name="email"
              placeholder={intervenant.email}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="phone" className="backoffice-input-half">
            <p className="bold">Téléphone</p>
            <input
              className="rules"
              type="text"
              name="telephone"
              placeholder={intervenant.telephone}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="backoffice_profilinterv_submit_button">
          <button className="button-blue" type="submit">
            Modifier le profil de l'intervenant
          </button>
        </div>
      </form>
      <div className="container-profil">
        <div className="profilInter-container">
          <div className="profilInter-img-container">
            <img className="imgDoc" src={imageCV} alt="cv de l'intervenant" />
          </div>
          <div className="ajustButton">
            <button
              type="button"
              className="button-blue"
              onClick={() => downloadImage(intervenant.image_cv)}
            >
              Télécharger
            </button>
          </div>
        </div>

        <div className="profilInter-container">
          <div className="profilInter-img-container">
            <img
              className="imgDoc"
              src={ImageAuto}
              alt="status d'auto entrepreneur de l'intervenant"
            />
          </div>
          <div className="ajustButton">
            <button
              type="button"
              className="button-blue"
              onClick={() =>
                downloadImage(intervenant.image_statut_autoentrepreneur)
              }
            >
              Télécharger
            </button>
          </div>
        </div>

        <div className="profilInter-container">
          <div className="profilInter-img-container">
            <img
              className="imgDoc"
              src={ImageCarteVitale}
              alt="carte vitale de l'intervenant"
            />
          </div>
          <div className="ajustButton">
            <button
              type="button"
              className="button-blue"
              onClick={() => downloadImage(intervenant.image_carte_vitale)}
            >
              Télécharger
            </button>
          </div>
        </div>
      </div>
      <ProfilStatusModification user={intervenant} />
    </div>
  );
}
