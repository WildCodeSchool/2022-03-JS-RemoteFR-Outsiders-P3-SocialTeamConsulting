const { v4: uuidv4 } = require("uuid");
const models = require("../models");
const etat = require("../JSON/UserStates.json");
const { hashPassword, AssociationJoiVerification } = require("../helpers/auth");

class AssociationsController {
  static browse = (req, res) => {
    models.associations
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
    models.associations
      .findByEmail(req.params.email)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const association = req.body;
    association.id = req.params.id;

    models.associations
      .update(association)
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
      models.associations
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
    const association = {
      etat: req.body.newStatus,
      id: req.params.id,
    };
    models.associations
      .updateEtat(association)
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
      };

      const association = req.body;
      const error = AssociationJoiVerification(association);
      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        models.associations
          .insert(association)
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
}

module.exports = AssociationsController;
