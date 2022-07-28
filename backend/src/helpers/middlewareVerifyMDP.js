const models = require("../models");
const { verifyPassword } = require("./auth");
const { verifyAccessToken } = require("./verifyAccessToken");

const verifyMDP = async (req, res, next) => {
  const { id } = req.params;
  const { password } = req.body;
  let hashedPassword = "";
  let model = "";
  const data = await verifyAccessToken(req.cookies.user_token);
  if (data.role === "association") {
    model = models.associations;
  }
  if (data.role === "intervenant") {
    model = models.intervenants;
  }
  if (data.role === "administrateur") {
    model = models.administrateurs;
  }
  model
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
