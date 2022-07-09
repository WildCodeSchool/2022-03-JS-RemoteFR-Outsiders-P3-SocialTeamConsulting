const models = require("../models");

class ModificationsController {
  static add = (req, res) => {
    const modification = req.body;

    models.modifications
      .insert(modification)
      .then(([result]) => {
        res.status(201).send({ ...modification, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ModificationsController;
