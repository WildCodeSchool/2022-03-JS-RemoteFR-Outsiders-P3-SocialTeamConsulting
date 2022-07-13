import React, { useState, useEffect, useContext } from "react";
import { api, notifySuccess } from "@services/services";
import MissionSynthesis from "./MissionSynthesis";
import "@style/ValidatedMissions.css";
import ExportContext from "../contexts/Context";

function HistoryMissions() {
  const { infoUser } = useContext(ExportContext.Context);
  const [user, setUser] = useState();
  const [update, setUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ENDPOINTINTERVENANT = "/intervenants";

    api
      .get(ENDPOINTINTERVENANT)
      .then((res) => {
        setUser(
          res.data.filter(
            (intervenant) => intervenant.email === infoUser.email
          )[0].id
        );
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, []);

  const [missions, setMissions] = useState([]);
  const [isRefused, setIsRefused] = useState(false);
  const [isValidated, setIsValidated] = useState(true);
  const [isPending, setIsPending] = useState(true);
  const [isTimeConstrained, setIsTimeConstrained] = useState("");
  const [filter, setFilter] = useState({
    refus: isRefused,
    encours: isPending,
    valide: isValidated,
    periode: isTimeConstrained,
  });

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
    setFilter({
      refus: isRefused,
      encours: isPending,
      valide: isValidated,
      periode: isTimeConstrained,
    });
    setUpdate(!update);
  }, [isRefused, isPending, isValidated, isTimeConstrained]);

  useEffect(() => {
    const ENDPOINT = `/missions/history/${user}`;

    const loading = async () => {
      setIsLoading(true);
    };

    loading().then(() => {
      api
        .get(ENDPOINT)
        .then((res) => {
          if (filter.encours && filter.valide && filter.refus) {
            setMissions(res.data);
          } else if (!filter.encours && !filter.valide && !filter.refus) {
            setMissions([]);
          } else if (filter.encours && filter.valide) {
            setMissions(res.data.filter((mission) => mission.isvalidated < 2));
          } else if (filter.encours && filter.refus) {
            setMissions(
              res.data.filter((mission) => mission.isvalidated !== 1)
            );
          } else if (filter.valide && filter.refus) {
            setMissions(
              res.data.filter((mission) => mission.isvalidated !== 0)
            );
          } else if (filter.refus) {
            setMissions(
              res.data.filter((mission) => mission.isvalidated === 2)
            );
          } else if (filter.encours) {
            setMissions(
              res.data.filter((mission) => mission.isvalidated === 0)
            );
          } else if (filter.valide) {
            setMissions(
              res.data.filter((mission) => mission.isvalidated === 1)
            );
          }
        })
        .then(() => {
          console.error("les missions ont été mises à jour");
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    });
  }, [user, update]);

  useEffect(() => {
    if (!isLoading) {
      if (filter.periode === "this-month") {
        setMissions(
          missions.filter(
            (mission) =>
              (new Date(mission.date_debut) >= monthLowerBoundary ||
                new Date(mission.date_fin) >= monthLowerBoundary) &&
              (new Date(mission.date_debut) <= monthUpperBoundary ||
                new Date(mission.date_fin) <= monthUpperBoundary)
          )
        );
      } else if (filter.periode === "previous-month") {
        setMissions(
          missions.filter(
            (mission) =>
              (new Date(mission.date_debut) >= lastMonthLowerBoundary ||
                new Date(mission.date_fin) >= lastMonthLowerBoundary) &&
              (new Date(mission.date_debut) <= lastMonthUpperBoundary ||
                new Date(mission.date_fin) <= lastMonthUpperBoundary)
          )
        );
      } else if (filter.periode === "even-before") {
        setMissions(
          missions.filter(
            (mission) =>
              (new Date(mission.date_debut) >= monthBeforeLastLowerBoundary ||
                new Date(mission.date_fin) >= monthBeforeLastLowerBoundary) &&
              (new Date(mission.date_debut) <= monthBeforeLastUpperBoundary ||
                new Date(mission.date_fin) <= monthBeforeLastUpperBoundary)
          )
        );
      }
    }
  }, [isLoading]);

  const handleAnnulationMission = (e) => {
    const ENDPOINTANNULATION = `/accepte/annulation/${e.target.value}/${user}`;
    api
      .put(ENDPOINTANNULATION)
      .then((result) => {
        if (result.status === 204) {
          notifySuccess("Suppression de la candidature avec succès");
          setUpdate(!update);
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

  const handleRefusedFilter = (e) => {
    if (e.target.checked) {
      setIsRefused(true);
    } else {
      setIsRefused(false);
    }
  };

  const handlePendingFilter = (e) => {
    if (e.target.checked) {
      setIsPending(true);
    } else {
      setIsPending(false);
    }
  };

  const handleValidatedFilter = (e) => {
    if (e.target.checked) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  };

  const handleMonthFilter = (e) => {
    if (e.target.value !== "all-months") {
      setIsTimeConstrained(e.target.value);
    }
  };

  return (
    <>
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
        <form action="" method="post" className="filter-from" onSubmit="">
          <label htmlFor="refused">
            {isRefused ? (
              <input
                type="checkbox"
                value="refusées"
                id="refused"
                name="refused"
                checked
                onChange={handleRefusedFilter}
              />
            ) : (
              <input
                type="checkbox"
                value="refusées"
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
          <label htmlFor="month-selection">
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
            <p className="inline"> : Validées </p>
          </label>
        </form>
      </div>

      <div className="card">
        {missions.length < 1 ? (
          <div>
            <h2>Il n'y a aucune mission dans votre historique.</h2>
          </div>
        ) : (
          missions.map((mission) => {
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
