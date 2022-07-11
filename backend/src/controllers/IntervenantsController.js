const { v4: uuidv4 } = require("uuid");
const models = require("../models");
const etat = require("../JSON/UserStates.json");
const { hashPassword, IntervenantJoiVerification } = require("../helpers/auth");

class IntervenantController {
  static browse = (req, res) => {
    models.intervenants
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseByEmail = (req, res) => {
    models.intervenants
      .findByEmail(req.params.email)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.intervenants
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

  static readByEmail = (req, res) => {
    models.intervenants
      .findByEmail(req.params.email)
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
    const intervenant = req.body;
    intervenant.id = req.params.id;
    models.intervenants
      .update(intervenant)
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

  static editMDP = (req, res) => {
    const { id } = req.params;
    const password = req.body.newPassword;
    hashPassword(password).then((hashedPassword) => {
      models.intervenants
        .updateMDP(hashedPassword, id)
        .then(([result]) => {
          if (result.affectedRows === 0) {
            res.sendStatus(404);
          } else {
            res.status(200).json(password);
          }
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    });
  };

  static editEtat = (req, res) => {
    const intervenant = {
      etat: req.body.newStatus,
      id: req.params.id,
    };
    models.intervenants
      .updateEtat(intervenant)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(201);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const uuid = uuidv4();
    hashPassword(req.body.password).then((hashedPassword) => {
      req.body.password = hashedPassword;
      req.body = {
        ...req.body,
        id: uuid,
        etat: etat[0],
        image_carte_vitale: req.files.CarteVitale.newFilename,
        image_statut_autoentrepreneur: req.files.AutoE.newFilename,
        image_cv: req.files.Cv.newFilename,
      };
      const intervenant = req.body;
      const error = IntervenantJoiVerification(intervenant);
      // TODO validations (length, format...)
      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        models.intervenants
          .insert(intervenant)
          .then(() => {
            res.status(201).send("utilisateur enregistré");
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      }
    });
  };

  static delete = (req, res) => {
    models.intervenants
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

module.exports = IntervenantController;
