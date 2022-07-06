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

  static read = (req, res) => {
    models.associations
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
    const item = req.body;

    // TODO validations (length, format...)

    item.id = parseInt(req.params.id, 10);

    models.associations
      .update(item)
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

  static delete = (req, res) => {
    models.associations
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

module.exports = AssociationsController;
