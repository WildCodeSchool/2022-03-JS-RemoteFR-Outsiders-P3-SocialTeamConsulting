const { v4: uuidv4 } = require("uuid");
const models = require("../models");
const etat = require("../JSON/UserStates.json");
const {
  hashPassword,
  AdministrateurJoiVerification,
} = require("../helpers/auth");

class AdministrateursController {
  static browse = (req, res) => {
    models.administrateurs
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
    models.administrateurs
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
    const intervenant = req.body;

    // TODO validations (length, format...)

    intervenant.id = parseInt(req.params.id, 10);

    models.administrateurs
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

  static add = (req, res) => {
    const uuid = uuidv4();
    hashPassword(req.body.password).then((hashedPassword) => {
      req.body.password = hashedPassword;
      req.body = {
        ...req.body,
        id: uuid,
        etat: etat[0],
      };
      const administrateur = req.body;
      const error = AdministrateurJoiVerification(administrateur);
      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        models.administrateurs
          .insert(administrateur)
          .then(() => {
            res.status(201).send("administrateur enregistré");
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      }
    });
  };

  static delete = (req, res) => {
    models.administrateurs
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

module.exports = AdministrateursController;
