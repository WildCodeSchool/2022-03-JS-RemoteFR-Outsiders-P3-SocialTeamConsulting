import React, { useEffect, useState } from "react";
import { api } from "@services/services";
import { useNavigate } from "react-router-dom";

import "@style/BackOfficeListeUsers.css";

function BackOfficeListeUsers() {
  const navigate = useNavigate();
  const [intervenants, setIntervenants] = useState([]);
  const [associations, setAssociations] = useState([]);
  const [administrateurs, setAdministrateurs] = useState([]);

  useEffect(() => {
    const ENDPOINTINTERVENANTS = "/intervenants";
    api.get(ENDPOINTINTERVENANTS).then((res) => {
      setIntervenants(res.data);
    });

    const ENDPOINTASSOCIATIONS = "/associations";
    api.get(ENDPOINTASSOCIATIONS).then((resultat) => {
      setAssociations(resultat.data);
    });

    const ENDPOINTADMINISTRATEURS = "/administrateurs";
    api.get(ENDPOINTADMINISTRATEURS).then((result) => {
      setAdministrateurs(result.data);
    });
  }, []);

  return (
    <div className="usersList">
      <div>
        <h2 className="listTitle"> Liste des intervenants</h2>
        {intervenants.map((intervenant) => {
          return (
            <div
              role="navigation"
              onClick={() =>
                navigate("/back_office/modification_profil_intervenant", {
                  state: { email: intervenant.email },
                })
              }
            >
              <p
                className={`${intervenant.etat}`}
              >{` - ${intervenant.nom} ${intervenant.prenom}`}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="listTitle"> Liste des associations</h2>
        {associations.map((association) => {
          return (
            <div
              role="navigation"
              onClick={() =>
                navigate("/back_office/modification_profil_association", {
                  state: { email: association.email },
                })
              }
            >
              <p className={`${association.etat}`}>{` - ${association.nom}`}</p>
            </div>
          );
        })}
      </div>

      <div>
        <h2 className="listTitle"> Liste des administrateurs</h2>
        {administrateurs.map((administrateur) => {
          return (
            <div
              role="navigation"
              onClick={() =>
                navigate("/back_office/modification_profil_administrateur", {
                  state: { email: administrateur.email },
                })
              }
            >
              <p>{`${administrateur.nom} ${administrateur.prenom}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BackOfficeListeUsers;
