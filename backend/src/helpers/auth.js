const argon2 = require("argon2");
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
              req.body.model = models.administrateurs;
              next();
            }
          });
        } else {
          req.body.userType = "intervenant";
          req.body.model = models.intervenants;
          next();
        }
      });
    } else {
      req.body.userType = "association";
      req.body.model = models.associations;
      next();
    }
  });
};

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (password, hashedPassword) => {
  return argon2.verify(hashedPassword, password);
};

const JWTTokenCreator = (userEmail, userType) => {
  return jwt.sign(
    { email: userEmail, role: userType },
    process.env.PRIVATE_KEY
  );
};

module.exports = {
  userTypeCheck,
  verifyPassword,
  JWTTokenCreator,
  hashPassword,
};
