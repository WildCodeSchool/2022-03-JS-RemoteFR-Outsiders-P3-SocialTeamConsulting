const models = require("../models");

class AccepteController {
  // static browse = (req, res) => {
  //   models.accepte
  //     .findAll()
  //     .then(([rows]) => {
  //       res.send(rows);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  // static read = (req, res) => {
  //   models.accepte
  //     .find(req.params.id)
  //     .then(([rows]) => {
  //       if (rows[0] == null) {
  //         res.sendStatus(404);
  //       } else {
  //         res.send(rows[0]);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  static readWithIntervenant = (req, res) => {
    const missionID = req.params.id;
    models.accepte
      .findAllWithIntervenant(missionID)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const { id } = req.params;
    console.warn(id);
    const { intervenantID, missionID } = req.body;
    /**
     * id = req.params => la data passé sur l'URL
     * intervenantID = l'id de l'intervenant choisi sur le front
     * missionID = l'id de la mission selectionné.
     *
     * console.warn({id, intervenantID, missionID});
     *
     * OK.
     */

    models.accepte.updateAccepteEtat(intervenantID, missionID);

    models.accepte
      .updateAccepteEtatRefus(intervenantID, missionID)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send("Le statut n'a pas été mis à jour.");
        } else {
          res.status(200).json({
            intervenantID,
            missionID,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err.message);
      });
  };

  static changeInter = (req, res) => {
    const missionID = req.params.id;
    models.accepte
      .findIntervenant(missionID)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static updateChangeInter = (req, res) => {
    const { intervenantID, missionID } = req.body;

    models.accepte.updateValidationInter(intervenantID, missionID);

    models.accepte
      .updateValidationInterRefus(intervenantID, missionID)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send("Le statut n'a pas été mis à jour.");
        } else {
          res.status(200).json({
            intervenantID,
            missionID,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err.message);
      });
  };

  // passe les inter de isvalidated 2 et 1 a 0 = reinitialise
  static updateRemoveInter = (req, res) => {
    const { missionID } = req.body;
    const intervenantID = req.body.choiceInt;
    models.accepte.updateRemoveEtatRefusAgain(intervenantID, missionID);

    models.accepte
      .updateRemoveEtatRefus(intervenantID, missionID)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send("Le statut n'a pas été mis à jour.");
        } else {
          res.status(200).json({
            intervenantID,
            missionID,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err.message);
      });
  };

  static readRefusedIntervenantByMission = (req, res) => {
    models.accepte
      .findMissionsWhereUserRefused(req.params.userId)
      .then((result) => {
        res.send(result);
      });
  };

  static add = (req, res) => {
    const missionId = req.params.id;
    const userId = req.body.user;

    models.accepte
      .insert(missionId, userId)
      .then(() => {
        res.status(201).send("Une nouvelle mission a été ajouté.");
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // static delete = (req, res) => {
  //   models.accepte
  //     .delete(req.params.id)
  //     .then(() => {
  //       res.sendStatus(204);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  static deleteAppliedMissionByIntervenant = (req, res) => {
    models.accepte
      .deleteByIntervenant(req.params.missionId, req.params.userId)
      .then(() => {
        res
          .status(204)
          .send(
            `Application to this mission by intervenant ${req.params.userId} has been deleted`
          );
      })
      .then(() => {
        models.missions.updateEtat(req.params.missionId, true);
      })
      .then(() => {
        res.status(204);
      })
      .then(async () => {
        const result = await models.accepte.findUserRefusedByMission(
          req.params.missionId
        );
        result[0].forEach((userId) => {
          models.accepte.resetMissionAccepte(
            req.params.missionId,
            userId.intervenants_id
          );
        });
      })
      .catch((err) => console.error(err));
  };
}

module.exports = AccepteController;
