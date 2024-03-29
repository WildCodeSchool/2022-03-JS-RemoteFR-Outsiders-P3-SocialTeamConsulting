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
    models.administrateurs
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
    const administrateur = req.body;
    administrateur.id = req.params.id;

    models.administrateurs
      .update(administrateur)
      .then(([result]) => {
        if (result.affectedRows[0] === 0) {
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

  static editMDP = (req, res) => {
    const { id } = req.params;
    const password = req.body.newPassword;
    hashPassword(password).then((hashedPassword) => {
      models.administrateurs
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
}

module.exports = AdministrateursController;
