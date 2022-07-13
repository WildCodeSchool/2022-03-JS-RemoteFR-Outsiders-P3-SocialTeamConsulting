import React, { useState, useEffect, useContext } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import { BiShowAlt, BiHide } from "react-icons/bi";
import ExportContext from "../contexts/Context";

import "../style/ModifProfil.css";

function ModifProfil() {
  const { infoUser } = useContext(ExportContext.Context);
  const [user, setUser] = useState({});

  useEffect(() => {
    let ENDPOINT = "";
    const ENDPOINTADMINISTRATEUR = `/administrateurs/bymail/${infoUser.email}`;
    const ENDPOINTASSOCIATION = `/associations/bymail/${infoUser.email}`;
    const ENDPOINTINTERVENANT = `/intervenants/bymail/${infoUser.email}`;
    if (infoUser.role === "association") {
      ENDPOINT = ENDPOINTASSOCIATION;
    }
    if (infoUser.role === "intervenant") {
      ENDPOINT = ENDPOINTINTERVENANT;
    }
    if (infoUser.role === "administrateur") {
      ENDPOINT = ENDPOINTADMINISTRATEUR;
    }
    api
      .get(ENDPOINT)
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user]);

  const [oldPassIsVisible, setoldPassIsVisible] = useState(false);
  const [newPasswordIsVisible, setnewPasswordIsVisible] = useState(false);
  const [newPassConfIsVisible, setnewPassConfIsVisible] = useState(false);
  const [newPass, setNewPass] = useState();

  const handleShowPassword = (e, inputChoice) => {
    e.preventDefault();
    if (inputChoice === "newPassword") {
      setnewPasswordIsVisible(!newPasswordIsVisible);
    }
    if (inputChoice === "newPassConf") {
      setnewPassConfIsVisible(!newPassConfIsVisible);
    }
    if (inputChoice === "oldPass") {
      setoldPassIsVisible(!oldPassIsVisible);
    }
  };

  function handleChange(e) {
    setNewPass({
      ...newPass,
      [e.target.name]: e.target.value,
    });
  }

  const changeMPD = (e) => {
    e.preventDefault();
    const ENDPOINTMDP = `/intervenants/mpd/${user.id}`;
    const password = newPass.oldPass;
    const { newPassword } = newPass;
    api
      .put(ENDPOINTMDP, { password, newPassword })
      .then(() => {
        notifySuccess("Votre nouveau mot de passe a été enregistré.");
      })
      .catch(() => {
        notifyError("Votre changement de mot de passe n'a pas pu aboutir.");
      });
  };

  return (
    <div className="modifProfil">
      <h1>
        {user.nom} {user.prenom}
      </h1>
      <p>{user.adresse}</p>
      <p>
        {user.code_postal} {user.ville}
      </p>
      <p>{user.email}</p>
      <p>{user.telephone}</p>
      <div className="modifProfil-card-container">
        <h2 className="modifProfil-h2">Changer mon mot de passe</h2>
        <form method="PUT" action="#">
          <div className="modifProfil-container">
            <div className="modifProfil-input-container">
              <label className="modifProfil-input" htmlFor="passOld">
                <input
                  placeholder="mot de passe actuel"
                  type={oldPassIsVisible ? "text" : "password"}
                  name="oldPass"
                  onChange={handleChange}
                  id="passOld"
                />
              </label>
              <div
                className="modifProfil-icon-container"
                role="button"
                tabIndex={0}
                onClick={(e) => handleShowPassword(e, "oldPass")}
              >
                {oldPassIsVisible ? (
                  <div className="modifProfil-icon">
                    <BiShowAlt />
                  </div>
                ) : (
                  <div className="modifProfil-icon">
                    <BiHide />
                  </div>
                )}
              </div>
            </div>
            <div className="modifProfil-input-container">
              <label className="modifProfil-input" htmlFor="passNew">
                <input
                  placeholder="nouveau mot de passe"
                  type={newPasswordIsVisible ? "text" : "password"}
                  name="newPassword"
                  onChange={handleChange}
                  id="passNew"
                />
              </label>
              <div
                className="modifProfil-icon-container"
                role="button"
                tabIndex={0}
                onClick={(e) => handleShowPassword(e, "newPassword")}
              >
                {newPasswordIsVisible ? (
                  <div className="modifProfil-icon">
                    <BiShowAlt />
                  </div>
                ) : (
                  <div className="modifProfil-icon">
                    <BiHide />
                  </div>
                )}
              </div>
            </div>
            <div className="modifProfil-input-container">
              <label className="modifProfil-input" htmlFor="passNewTry">
                <input
                  placeholder="confirmer le nouveau mot de passe"
                  type={newPassConfIsVisible ? "text" : "password"}
                  name="newPassConf"
                  onChange={handleChange}
                  id="passNewTry"
                />
              </label>
              <div
                className="modifProfil-icon-container"
                role="button"
                tabIndex={0}
                onClick={(e) => handleShowPassword(e, "newPassConf")}
              >
                {newPassConfIsVisible ? (
                  <div className="modifProfil-icon">
                    <BiShowAlt />
                  </div>
                ) : (
                  <div className="modifProfil-icon">
                    <BiHide />
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            id="button_preinscription"
            className="button-blue"
            type="submit"
            onClick={(e) => changeMPD(e)}
            required
          >
            confirmer mon nouveau mot de passe
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModifProfil;
