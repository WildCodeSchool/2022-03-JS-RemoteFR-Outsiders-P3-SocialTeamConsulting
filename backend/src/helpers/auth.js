/* eslint-disable camelcase */
const argon2 = require("argon2");
const Joi = require("joi");
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

const JWTTokenCreator = (userEmail, userType, etat) => {
  return jwt.sign(
    { email: userEmail, role: userType, état: etat },
    process.env.PRIVATE_KEY
  );
};

const IntervenantJoiVerification = (intervenant) => {
  const {
    nom,
    prenom,
    email,
    telephone,
    password,
    image_cv,
    image_carte_vitale,
    image_statut_autoentrepreneur,
    pre_inscription_message,
  } = intervenant;
  const { error } = Joi.object({
    nom: Joi.string().max(100).required(),
    prenom: Joi.string().max(100).required(),
    email: Joi.string().email().max(255).required(),
    telephone: Joi.string().min(10).max(10).required(),
    password: Joi.string().max(255).required(),
    image_cv: Joi.string().max(255).required(),
    image_carte_vitale: Joi.string().max(255).required(),
    image_statut_autoentrepreneur: Joi.string().max(255).required(),
    pre_inscription_message: Joi.string().max(500).required(),
  }).validate(
    {
      nom,
      prenom,
      email,
      telephone,
      password,
      image_cv,
      image_carte_vitale,
      image_statut_autoentrepreneur,
      pre_inscription_message,
    },
    { abortEarly: false }
  );
  return error;
};

const AssociationJoiVerification = (association) => {
  const {
    nom,
    email,
    telephone,
    password,
    adresse,
    code_postal,
    ville,
    pre_inscription_message,
  } = association;
  const { error } = Joi.object({
    nom: Joi.string().max(100).required(),
    email: Joi.string().email().max(255).required(),
    telephone: Joi.string().min(10).max(10).required(),
    password: Joi.string().max(255).required(),
    adresse: Joi.string().max(255).required(),
    code_postal: Joi.string().max(5).required(),
    ville: Joi.string().max(255).required(),
    pre_inscription_message: Joi.string().max(500).required(),
  }).validate(
    {
      nom,
      email,
      telephone,
      password,
      adresse,
      code_postal,
      ville,
      pre_inscription_message,
    },
    { abortEarly: false }
  );
  return error;
};

module.exports = {
  userTypeCheck,
  verifyPassword,
  JWTTokenCreator,
  hashPassword,
  IntervenantJoiVerification,
  AssociationJoiVerification,
};
