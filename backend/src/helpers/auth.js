const jwt = require("jsonwebtoken");
const models = require("../models");

const userTypeCheck = (req, res, next) => {
  const { email } = req.body;
  models.associations.findByEmail(email).then((userAsso) => {
    if (!userAsso[0][0]) {
      models.intervenants.findByEmail(email).then((userInterv) => {
        if (!userInterv[0][0]) {
          models.administrateurs.findByEmail(email).then((userAdmin) => {
            if (!userAdmin[0][0]) {
              res.status(401).send("Email ou mot de passe incorect");
            } else {
              req.body.userType = "administrateur";
              next();
            }
          });
        } else {
          req.body.userType = "intervenant";
          next();
        }
      });
    } else {
      req.body.userType = "association";
      next();
    }
  });
};

const verifyPassword = (plainPassword, hashedPassword) => {
  /* argon2 n'est pas encore implanté pour sécurisé les mots de passe */
  return plainPassword === hashedPassword;
};

const JWTTokenCreator = (user) => {
  return jwt.sign({ email: user[0][0].email }, process.env.PRIVATE_KEY);
};

module.exports = { userTypeCheck, verifyPassword, JWTTokenCreator };
