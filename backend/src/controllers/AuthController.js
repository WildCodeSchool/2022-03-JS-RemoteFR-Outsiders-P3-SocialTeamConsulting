const models = require("../models");
const { JWTTokenCreator } = require("../helpers/auth");
const auth = require("../helpers/auth");

class AuthController {
  static session = (req, res) => {
    let model = "";
    switch (req.body.userType) {
      case "association":
        model = models.associations;
        break;
      case "intervenant":
        model = models.intervenants;
        break;
      case "administrateur":
        model = models.administrateurs;
        break;
      default:
        res.status(501).res("Problème de serveur");
    }
    model.findByEmail(req.body.email).then((user) => {
      if (auth.verifyPassword(req.body.password, user[0][0].password)) {
        const token = JWTTokenCreator(user);
        res.cookie("user_token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        });
        res.status(201).send("Le mot de passe est correct");
      } else {
        res.status(401).send("Email ou mot de passe incorect");
      }
    });
  };
}

module.exports = AuthController;
