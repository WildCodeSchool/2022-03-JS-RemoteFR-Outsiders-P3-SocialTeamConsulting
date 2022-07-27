import React, { useState, useEffect, useContext, useRef } from "react";
import { api, notifySuccess, sortByDate } from "@services/services";
import MissionSynthesis from "./MissionSynthesis";
import "@style/ValidatedMissions.css";
import ExportContext from "../contexts/Context";

function HistoryMissions() {
  const { infoUser } = useContext(ExportContext.Context);
  const [user, setUser] = useState();
  const [update, setUpdate] = useState(false);
  const [updateRefusedFilter, setUpdateRefusedFilter] = useState(false);
  const [updatePendingFilter, setUpdatePendingFilter] = useState(false);
  const [updateValidatedFilter, setUpdateValidatedFilter] = useState(false);
  const [loadMissionWithoutFilter, setLoadMissionWithoutFilter] =
    useState(false);
  const [applyTimeFilter, setApplyTimeFilter] = useState(false);
  const filterStep = useRef(0);
  const timeFilterStep = useRef(1);

  const ENDPOINTINTERVENANT = "/intervenants";
  const ENDPOINTASSOCIATION = "/associations";
  const ENDPOINTADMINISTRATEUR = "/administrateurs";
  let ENDPOINTROLE = "";

  useEffect(() => {
    // on récupère l'id de l'user pour charger ses missions
    console.error(infoUser);
    if (infoUser.role === "intervenant") {
      ENDPOINTROLE = ENDPOINTINTERVENANT;
    }
    if (infoUser.role === "association") {
      filterStep.current = 8;
      ENDPOINTROLE = ENDPOINTASSOCIATION;
    }
    if (infoUser.role === "administrateur") {
      filterStep.current = 8;
      ENDPOINTROLE = ENDPOINTADMINISTRATEUR;
    }

    api
      .get(ENDPOINTROLE)
      .then((res) => {
        setUser(
          res.data.filter((thisUser) => thisUser.email === infoUser.email)[0].id
        );
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, []);

  const [missions, setMissions] = useState([]);
  const [missionsFiltered, setMissionsFiltered] = useState([]);

  // initialisation des valeurs par défault du filtre
  const [isRefused, setIsRefused] = useState(false);
  const [isValidated, setIsValidated] = useState(true);
  const [isPending, setIsPending] = useState(true);
  const isTimeConstrained = useRef("all-months");

  // on charge les missions de l'utilisateur quand l'id de l'utilisateur est récupéré

  useEffect(() => {
    if (typeof user !== "undefined") {
      const ENDPOINTMISSIONSINTERVENANT = `/missions/history/${user}`;
      const ENDPOINTMISSIONSASSOCIATION = `/missions/assohistory/${user}`;
      const ENDPOINTMISSIONSADMINISTRATEUR = `/missions`;
      let ENDPOINT = "";
      if (infoUser.role === "intervenant") {
        ENDPOINT = ENDPOINTMISSIONSINTERVENANT;
      }
      if (infoUser.role === "association") {
        ENDPOINT = ENDPOINTMISSIONSASSOCIATION;
      }
      if (infoUser.role === "administrateur") {
        ENDPOINT = ENDPOINTMISSIONSADMINISTRATEUR;
      }

      api
        .get(ENDPOINT)
        .then((res) => {
          setMissions(res.data);
          console.error(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [user, update]);

  // les fonctions appellées par l'UI pour activer les filtres par les checkbox

  const handleRefusedFilter = (e) => {
    if (e.target.checked) {
      filterStep.current = 6; // les fonctions handle ne doivent pas relancer l'ensemble des filtres. 6 signifie ne rien faire après application du filtre
      timeFilterStep.current = 1; // l'application d'un filtre de catégorie doit relancer le filtre temporel
      setIsRefused(true);
      setUpdateRefusedFilter(!updateRefusedFilter);
    } else {
      filterStep.current = 6;
      setIsRefused(false);
      setUpdateRefusedFilter(!updateRefusedFilter);
    }
  };

  const handlePendingFilter = (e) => {
    if (e.target.checked) {
      filterStep.current = 6; // les fonctions handle ne doivent pas relancer l'ensemble des filtres. 6 signifie ne rien faire après application du filtre
      timeFilterStep.current = 1; // l'application d'un filtre de catégorie doit relancer le filtre temporel
      setIsPending(true);
      setUpdatePendingFilter(!updatePendingFilter);
    } else {
      filterStep.current = 6;
      setIsPending(false);
      setUpdatePendingFilter(!updatePendingFilter);
    }
  };

  const handleValidatedFilter = (e) => {
    if (e.target.checked) {
      filterStep.current = 6; // les fonctions handle ne doivent pas relancer l'ensemble des filtres. 6 signifie ne rien faire après application du filtre
      timeFilterStep.current = 1; // l'application d'un filtre de catégorie doit relancer le filtre temporel
      setIsValidated(true);
      setUpdateValidatedFilter(!updateValidatedFilter);
    } else {
      filterStep.current = 6;
      setIsValidated(false);
      setUpdateValidatedFilter(!updateValidatedFilter);
    }
  };

  const handleMonthFilter = (e) => {
    isTimeConstrained.current = e.target.value;
    timeFilterStep.current = 1; // on demande au dispatcher d'appliquer un filtre temporel
    if (infoUser.role === "intervenant") {
      filterStep.current = 0; // on s'assure d'appliquer le filtre temporel sur les filtres de status déjà existant
      setMissionsFiltered([]); // on réinitialise missionFiltered ce qui relance le dispatcher
    } else {
      filterStep.current = 8;
      setMissionsFiltered([]); // on réinitialise missionFiltered ce qui relance le dispatcher
    }
  };

  // ici on lance les filtres au premier chargement en s'assurant qu'ils se lancent l'un après que l'autre soit executé. Si l'on arrive ici par le biais de la checkbox, on est redirigé vers le 6

  useEffect(() => {
    if (missions.length > 0) {
      switch (filterStep.current) {
        case 0:
          filterStep.current = 1; // si 0 passe à 1 (on appelle le filtre refused)
          setUpdateRefusedFilter(!updateRefusedFilter);
          break;
        case 2:
          filterStep.current = 3; // si 2 (refused appliqué) on appelle le filtre Pending)
          setUpdatePendingFilter(!updatePendingFilter);
          break;
        case 4:
          filterStep.current = 5; // si 2 (pending) passe à 3 (validated)
          setUpdateValidatedFilter(!updateValidatedFilter);
          break;
        case 6:
          break;
        case 7: // si besoin de réinitialiser missionfiltered (par exemple lors d'une annulation de candidature ou mission doit être rechargée)
          filterStep.current = 0;
          setMissionsFiltered([]);
          break;
        case 8: // le cas spécifique de l'administrateur qui n'a pas de filtre
          setLoadMissionWithoutFilter(!loadMissionWithoutFilter);
          break;
        default:
          filterStep.current = 0;
      }
      if (filterStep.current === 6) {
        switch (timeFilterStep.current) {
          case 0:
            break; // si timeFilterStep = 0, on ne doit pas appliquer le filtre temporel
          case 1:
            timeFilterStep.current = 2;
            setApplyTimeFilter(!applyTimeFilter); // timeFilterStep = 1 : il faut appliquer le filtre maintenant
            break;
          case 2:
            timeFilterStep.current = 0;
            break;
          default:
            timeFilterStep.current = 0;
        }
        sortByDate(missionsFiltered); // tri des missions , la mission la plus récente d'abord
      }
    }
  }, [missions, missionsFiltered]);

  // on charge sans filtre

  useEffect(() => {
    if (missions.length > 0 && infoUser.role !== "intervenant") {
      filterStep.current = 6;
      setMissionsFiltered(missions);
    }
  }, [loadMissionWithoutFilter]);

  // application du filtre refused
  useEffect(() => {
    if (
      (missions.length > 0 && filterStep.current === 1) ||
      filterStep.current === 6
    ) {
      if (filterStep.current === 1) {
        filterStep.current = 2; // on indique le prochain filtre à charger lors du chargement initial
      }
      if (isRefused) {
        setMissionsFiltered([
          ...missionsFiltered,
          ...missions.filter((mission) => mission.isvalidated === 2),
        ]);
      } else if (!isRefused) {
        setMissionsFiltered([
          ...missionsFiltered.filter((mission) => mission.isvalidated !== 2),
        ]);
      }
    }
  }, [updateRefusedFilter, isRefused]);

  // application du filtre pending
  useEffect(() => {
    if (
      missions.length > 0 &&
      (filterStep.current === 3 || filterStep.current === 6)
    ) {
      if (filterStep.current === 3) {
        filterStep.current = 4; // on indique le prochain filtre à charger lors du chargement initial
      }
      if (isPending) {
        setMissionsFiltered([
          ...missionsFiltered,
          ...missions.filter((mission) => mission.isvalidated === 0),
        ]);
      } else if (!isPending) {
        setMissionsFiltered([
          ...missionsFiltered.filter((mission) => mission.isvalidated !== 0),
        ]);
      }
    }
  }, [updatePendingFilter, isPending]);

  // application du filtre validé
  useEffect(() => {
    if (
      missions.length > 0 &&
      (filterStep.current === 5 || filterStep.current === 6)
    ) {
      if (filterStep.current === 5) {
        filterStep.current = 6; // on indique le prochain filtre à charger lors du chargement initial
      }
      if (isValidated) {
        setMissionsFiltered([
          ...missionsFiltered,
          ...missions.filter((mission) => mission.isvalidated === 1),
        ]);
      } else if (!isValidated) {
        setMissionsFiltered([
          ...missionsFiltered.filter((mission) => mission.isvalidated !== 1),
        ]);
      }
    }
  }, [updateValidatedFilter, isValidated]);

  // on initialise les dates nécessaires au calcul du filtre temporel
  const currentDate = new Date();
  const currentMonth = currentDate.getUTCMonth();
  const currentYear = currentDate.getUTCFullYear();
  const monthLowerBoundary = new Date(currentYear, currentMonth, 1, 0, 0, 0);
  const monthUpperBoundary = new Date(
    currentYear,
    currentMonth + 1,
    0,
    0,
    0,
    0
  );
  const lastMonthLowerBoundary = new Date(
    currentYear,
    currentMonth - 1,
    1,
    0,
    0,
    0
  );
  const lastMonthUpperBoundary = new Date(
    currentYear,
    currentMonth,
    0,
    0,
    0,
    0
  );
  const monthBeforeLastLowerBoundary = new Date(
    currentYear,
    currentMonth - 2,
    1,
    0,
    0,
    0
  );
  const monthBeforeLastUpperBoundary = new Date(
    currentYear,
    currentMonth - 1,
    0,
    0,
    0,
    0
  );

  useEffect(() => {
    if (missionsFiltered.length > 0 && timeFilterStep.current === 2) {
      // on s' assure que missionFiltered est définie et qu'on est bien passé par le dispatcher

      if (isTimeConstrained.current === "all-months") {
        timeFilterStep.current = 0;
      } else if (isTimeConstrained.current === "this-month") {
        setMissionsFiltered([
          ...missionsFiltered.filter(
            (mission) =>
              (new Date(mission.date_debut) >= monthLowerBoundary ||
                new Date(mission.date_fin) >= monthLowerBoundary) &&
              (new Date(mission.date_debut) <= monthUpperBoundary ||
                new Date(mission.date_fin) <= monthUpperBoundary)
          ),
        ]);
      } else if (isTimeConstrained.current === "previous-month") {
        setMissionsFiltered([
          ...missionsFiltered.filter(
            (mission) =>
              (new Date(mission.date_debut) >= lastMonthLowerBoundary ||
                new Date(mission.date_fin) >= lastMonthLowerBoundary) &&
              (new Date(mission.date_debut) <= lastMonthUpperBoundary ||
                new Date(mission.date_fin) <= lastMonthUpperBoundary)
          ),
        ]);
      } else if (isTimeConstrained.current === "even-before") {
        setMissionsFiltered([
          ...missionsFiltered.filter(
            (mission) =>
              (new Date(mission.date_debut) >= monthBeforeLastLowerBoundary ||
                new Date(mission.date_fin) >= monthBeforeLastLowerBoundary) &&
              (new Date(mission.date_debut) <= monthBeforeLastUpperBoundary ||
                new Date(mission.date_fin) <= monthBeforeLastUpperBoundary)
          ),
        ]);
      }
    }
  }, [applyTimeFilter]);

  const handleAnnulationMission = (e) => {
    const ENDPOINTANNULATION = `/accepte/annulation/${e.target.value}/${user}`;
    api
      .put(ENDPOINTANNULATION)
      .then((result) => {
        if (result.status === 204) {
          filterStep.current = 7;
          setUpdate(!update);
          notifySuccess("Suppression de la candidature avec succès");
        }
      })
      .catch((err) => console.error(err));
  };

  const annulationMissionArea = (missionId) => {
    if (infoUser.role === "intervenant") {
      return (
        <div className="synthesis-validation_area">
          <button
            type="button"
            className="button-blue"
            value={missionId}
            onClick={handleAnnulationMission}
          >
            Annuler ma candidature
          </button>
        </div>
      );
    }
    return "";
  };

  return (
    <>
      {infoUser.role !== "intervenant" ? null : (
        <>
          {" "}
          <div className="header-mission-synthesis">
            <div>
              <h2>
                Ensemble des missions pour lesquelles j'ai postulé, en cours et
                effectuées
              </h2>
            </div>

            <div className="legende">
              <div>Légende : </div>
              <div>refusée :</div>
              <div className="is-refused-legend"> </div>
              <div>En attente de validation :</div>
              <div className="pending-validation-legend"> </div>
              <div>Validée : </div>
              <div className="is-validated-legend"> </div>
            </div>
          </div>
          <div className="filters">
            <form action="" method="post" className="filter-form">
              <label htmlFor="refused">
                {isRefused ? (
                  <input
                    type="checkbox"
                    value="refused"
                    id="refused"
                    name="refused"
                    checked
                    onChange={handleRefusedFilter}
                  />
                ) : (
                  <input
                    type="checkbox"
                    value="refused"
                    id="refused"
                    name="refused"
                    onChange={handleRefusedFilter}
                  />
                )}
                <p className="inline"> : Refusées </p>
              </label>
              <label htmlFor="pending">
                {isPending ? (
                  <input
                    type="checkbox"
                    value="pending"
                    id="pending"
                    name="pending"
                    checked
                    onChange={handlePendingFilter}
                  />
                ) : (
                  <input
                    type="checkbox"
                    value="pending"
                    id="pending"
                    name="pending"
                    onChange={handlePendingFilter}
                  />
                )}
                <p className="inline"> : En attente de validation </p>
              </label>
              <label htmlFor="validated">
                {isValidated ? (
                  <input
                    type="checkbox"
                    value="validated"
                    id="validated"
                    name="validated"
                    checked
                    onChange={handleValidatedFilter}
                  />
                ) : (
                  <input
                    type="checkbox"
                    value="validated"
                    id="validated"
                    name="validated"
                    onChange={handleValidatedFilter}
                  />
                )}
                <p className="inline"> : Validées </p>
              </label>
              <br />
            </form>
          </div>
        </>
      )}
      <div className="filters">
        <label htmlFor="month-selection">
          <p className="inline"> Afficher : </p>
          <select
            id="month-selection"
            name="month-selection"
            onChange={handleMonthFilter}
          >
            <option value="this-month">Mois en cours</option>
            <option value="previous-month">Mois précédent</option>
            <option value="even-before">Mois - 2</option>
            <option value="all-months" selected>
              Tout l'historique
            </option>
          </select>
        </label>
      </div>
      <div className="card">
        {missions.length < 1 ? (
          <div>
            <h2>Il n'y a aucune mission dans votre historique.</h2>
          </div>
        ) : (
          missionsFiltered.map((mission) => {
            return (
              <MissionSynthesis
                mission={mission}
                key={mission.id}
                annulationArea={annulationMissionArea}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default HistoryMissions;
