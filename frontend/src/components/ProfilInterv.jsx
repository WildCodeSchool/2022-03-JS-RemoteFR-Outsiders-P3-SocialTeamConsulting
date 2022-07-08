import React, { useEffect, useState } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import { useLocation } from "react-router-dom";

import "@style/App.css";
import "@style/ProfilInterv.css";

export default function ProfilInterv() {
  const { state } = useLocation();
  const { email } = state;
  const [intervenant, setIntervenant] = useState({});

  useEffect(() => {
    const ENDPOINT = `/intervenants/bymail/${email}`;
    api.get(ENDPOINT).then((result) => {
      setIntervenant(result.data);
    });
  }, []);

  // On veut mettre a jour les informations d'un intervenant

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

  // changement de valeur
  function handleChange(event) {
    setIntervenant({
      ...intervenant,
      [event.target.name]: event.target.value,
    });
  }

  const handleStatus = (newStatus) => {
    const ENDPOINTETAT = `/intervenants/etat/${intervenant.id}`;
    api
      .put(ENDPOINTETAT, { newStatus })
      .then(() => {
        notifySuccess(`L'utilisateur à maintenant le status "${newStatus}"`);
      })
      .catch(() => {
        notifyError("Une erreur est survenue lors de la mise à jour.");
      });
  };

  const inscritButton = () => {
    return (
      <div
        role="button"
        tabIndex={0}
        className="button-blue"
        onClick={() => handleStatus("inscrit")}
      >
        Mettre l'utilisateur en status "inscrit"
      </div>
    );
  };
  const refuseButton = () => {
    return (
      <div
        role="button"
        tabIndex={0}
        className="button-blue"
        onClick={() => handleStatus("refusé")}
      >
        Refuser le pré-inscription de l'utilisateur
      </div>
    );
  };
  const banniButton = () => {
    return (
      <div
        role="button"
        tabIndex={0}
        className="button-blue"
        onClick={() => handleStatus("banni")}
      >
        Bannir l'utilisateur
      </div>
    );
  };
  const modifEtat = () => {
    switch (intervenant.etat) {
      case "pré-inscrit":
        return (
          <div>
            {inscritButton()} {refuseButton()} {banniButton()}
          </div>
        );

      case "inscrit":
        return <div>{banniButton()}</div>;

      case "refusé":
        return (
          <div>
            {inscritButton()} {banniButton()}
          </div>
        );

      case "banni":
        return <div>{inscritButton()}</div>;
      default:
        return "";
    }
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
            <p>Nom</p>
            <input
              className="rules"
              type="text"
              name="nom"
              placeholder={intervenant.nom}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="firstname" className="backoffice-input-half">
            <p>Prénom</p>
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
            <p>Email</p>
            <input
              className="rules"
              type="email"
              name="email"
              placeholder={intervenant.email}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="phone" className="backoffice-input-half">
            <p>Téléphone</p>
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
      <hr className="navbar-hr" />
      <p>{`Cet utilisateur est actuellement ${intervenant.etat}.`}</p>
      {modifEtat()}
    </div>
  );
}
