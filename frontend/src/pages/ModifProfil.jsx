import React, { useState, useEffect, useContext } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import ExportContext from "../contexts/Context";

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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [newPass, setNewPass] = useState();

  const handleShowPassword = (e) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
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
    <>
      <div>
        <h1>
          {user.nom} {user.prenom}
        </h1>
        <p>{user.adresse}</p>
        <p>
          {user.code_postal} {user.ville}
        </p>
        <p>{user.email}</p>
        <p>{user.telephone}</p>
      </div>
      <div>
        <form method="PUT" action="#">
          <div>
            <label htmlFor="passNew">
              Nouveau mot de passe
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="newPassword"
                onChange={handleChange}
                id="passNew"
              />
            </label>
            <button type="button" onClick={(e) => handleShowPassword(e)}>
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
          </div>

          <div>
            <label htmlFor="passNewTry">
              Confirmation du mot de passe
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="newPassConf"
                onChange={handleChange}
                id="passNewTry"
              />
            </label>
          </div>
          <div>
            <label htmlFor="passOld">
              Ancien mot de passe
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="oldPass"
                onChange={handleChange}
                id="passOld"
              />
            </label>
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
    </>
  );
}

export default ModifProfil;
