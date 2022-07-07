const models = require("../models");

class AccepteController {
  static browse = (req, res) => {
    models.accepte
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.accepte
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
          res.status(404).send("Le statut de la mission a change");
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
    const id = parseInt(req.params.id, 10);
    console.warn(id);
    const { intervenantID, missionID } = req.body;

    models.accepte.updateValidationInter(intervenantID, missionID);

    models.accepte
      .updateValidationInterRefus(intervenantID, missionID)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send("Le statut de la mission a change");
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

  static add = (req, res) => {
    const missionId = req.params.id;
    const userId = req.body.user;

    models.accepte
      .insert(missionId, userId)
      .then(() => {
        res.status(201).send("ok");
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.accepte
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = AccepteController;
