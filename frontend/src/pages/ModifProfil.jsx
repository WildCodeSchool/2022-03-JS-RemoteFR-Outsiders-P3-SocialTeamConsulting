import React, { useState, useEffect, useContext } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import { BiShowAlt, BiHide } from "react-icons/bi";
import ExportContext from "../contexts/Context";

import "../style/ModifProfil.css";

function ModifProfil() {
  const { infoUser } = useContext(ExportContext.Context);
  const [user, setUser] = useState({});

  useEffect(() => {
    /*
     ** UseEffect to load the correct route depending of the type of user
     */

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

  const [isPasswordVisilbe, setIsPasswordVisilbe] = useState({
    oldPassword: false,
    newPassword: false,
    newPasswordConfirm: false,
  });
  const [newPass, setNewPass] = useState();

  const handleShowPassword = (e, inputChoice) => {
    e.preventDefault();
    setIsPasswordVisilbe({
      ...isPasswordVisilbe,
      [inputChoice]: !isPasswordVisilbe[inputChoice],
    });
  };

  function handleChange(e) {
    setNewPass({
      ...newPass,
      [e.target.name]: e.target.value,
    });
  }

  const changeMPD = (e) => {
    e.preventDefault();
    let ENDPOINTMDP = "";
    const ENDPOINTMDPINTER = `/intervenants/mpd/${user.id}`;
    const ENDPOINTMDPADMIN = `/administrateurs/mpd/${user.id}`;
    const ENDPOINTMDPASSO = `/associations/mpd/${user.id}`;
    const password = newPass.oldPassword;
    const { newPassword } = newPass;

    if (infoUser.role === "association") {
      ENDPOINTMDP = ENDPOINTMDPASSO;
    }
    if (infoUser.role === "intervenant") {
      ENDPOINTMDP = ENDPOINTMDPINTER;
    }
    if (infoUser.role === "administrateur") {
      ENDPOINTMDP = ENDPOINTMDPADMIN;
    }
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
                  type={isPasswordVisilbe.oldPassword ? "text" : "password"}
                  name="oldPassword"
                  onChange={handleChange}
                  id="passOld"
                />
              </label>
              <div
                className="modifProfil-icon-container"
                role="button"
                tabIndex={0}
                onClick={(e) => handleShowPassword(e, "oldPassword")}
              >
                {isPasswordVisilbe.oldPassword ? (
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
                  type={isPasswordVisilbe.newPassword ? "text" : "password"}
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
                {isPasswordVisilbe.newPassword ? (
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
                  type={
                    isPasswordVisilbe.newPasswordConfirm ? "text" : "password"
                  }
                  name="newPasswordConfirm"
                  onChange={handleChange}
                  id="passNewTry"
                />
              </label>
              <div
                className="modifProfil-icon-container"
                role="button"
                tabIndex={0}
                onClick={(e) => handleShowPassword(e, "newPasswordConfirm")}
              >
                {isPasswordVisilbe.newPasswordConfirm ? (
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
