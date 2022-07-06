import React, { useEffect, useState, useContext } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import ExportContext from "../contexts/Context";

import "@style/App.css";
import "@style/ProfilInterv.css";

export default function ProfilInterv() {
  const [intervenant, setIntervenant] = useState({});
  const { infoUser } = useContext(ExportContext.Context);
  const { email } = infoUser;

  useEffect(() => {
    const ENDPOINT = `/intervenants/email/${email}`;
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

  return (
    // <div className="backoffice-bloc">
    //     <p>Nom</p>
    //     <p>{intervenant.nom}
    //     </p>
    //     <p>Prénom</p>
    //     <p>{intervenant.prenom}
    //     </p>
    //     <p>{intervenant.email}</p>
    //     <p>{intervenant.telephone}
    //     </p>
    // </div>

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
            onChange={() => handleChange}
          />
        </label>
        <label htmlFor="firstname" className="backoffice-input-half">
          <p>Prénom</p>
          <input
            className="rules"
            type="text"
            name="prenom"
            placeholder={intervenant.prenom}
            onChange={() => handleChange}
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
            onChange={() => handleChange}
          />
        </label>
        <label htmlFor="phone" className="backoffice-input-half">
          <p>Téléphone</p>
          <input
            className="rules"
            type="text"
            name="telephone"
            placeholder={intervenant.telephone}
            onChange={() => handleChange}
          />
        </label>
      </div>

      <div className="backoffice_profilinterv_submit_button">
        <button className="button-blue" type="submit">
          Modifier le profil de l'intervenant
        </button>
      </div>
    </form>
  );
}
