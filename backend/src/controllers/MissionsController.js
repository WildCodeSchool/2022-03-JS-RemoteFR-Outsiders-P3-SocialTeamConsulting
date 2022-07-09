const models = require("../models");
const etat = require("../JSON/MissionStates.json");

class MissionsController {
  static browse = (req, res) => {
    models.missions
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseWithAssociation = (req, res) => {
    models.missions
      .findAllWithAssociation()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseValidatedMissions = (req, res) => {
    models.missions
      .findValidatedMissions()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseMissionsHistory = (req, res) => {
    models.missions
      .findMyMissions(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.missions
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const { isValidated } = req.body;

    const missionId = parseInt(req.params.id, 10);

    models.missions
      .updateEtat(missionId, isValidated)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    req.body = {
      ...req.body,
      etat: etat[0],
    };
    const mission = req.body;
    models.missions
      .insert(mission)
      .then(() => {
        res.status(201).send("Mission enregistrée");
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static editPourvue = (req, res) => {
    const { id } = req.params;
    models.missions
      .updatePourvue(id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static editTerminee = (req, res) => {
    const { id } = req.params;
    models.missions
      .updateTerminee(id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // passe la mission de pourvue a acceptee
  static editAccepte = (req, res) => {
    const { id } = req.params;
    models.missions
      .updateAccepte(id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.missions
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseMissionsNotAccepted = (req, res) => {
    const userId = req.params.id;
    models.missions
      .findMyMissionsNotAccepted(userId)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = MissionsController;
