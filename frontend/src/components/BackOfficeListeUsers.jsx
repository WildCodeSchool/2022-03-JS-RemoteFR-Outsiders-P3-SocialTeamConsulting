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
        <details className="user-list">
          <summary className="listTitle"> Liste des intervenants</summary>
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
        </details>
      </div>

      <div>
        <details className="user-list">
          <summary className="listTitle"> Liste des associations</summary>
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
                <p
                  className={`${association.etat}`}
                >{` - ${association.nom}`}</p>
              </div>
            );
          })}
        </details>
      </div>

      <div>
        <details className="user-list">
          <summary className="listTitle"> Liste des administrateurs</summary>
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
                <p className="admin">{`${administrateur.nom} ${administrateur.prenom}`}</p>
              </div>
            );
          })}
        </details>
      </div>
    </div>
  );
}

export default BackOfficeListeUsers;
