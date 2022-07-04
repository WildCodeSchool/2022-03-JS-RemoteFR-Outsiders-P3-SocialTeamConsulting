const models = require("../models");

class MessagesController {
  static browse = (req, res) => {
    models.messages
      .showAllMessages()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const message = req.body;

    models.messages
      .insert(message)
      .then(([result]) => {
        res.status(201).send({ ...message, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = MessagesController;
