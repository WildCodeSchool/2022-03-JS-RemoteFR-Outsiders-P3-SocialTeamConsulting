const models = require("../models");
const { verifyPassword } = require("./auth");

const verifyMDP = (req, res, next) => {
  const { id } = req.params;
  const { password } = req.body;
  let hashedPassword = "";
  models.intervenants
    .find(id)
    .then((result) => {
      hashedPassword = result[0][0].password;
      if (!verifyPassword(password, hashedPassword)) {
        res.sendStatus(400);
      } else {
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
};

module.exports = { verifyMDP };
