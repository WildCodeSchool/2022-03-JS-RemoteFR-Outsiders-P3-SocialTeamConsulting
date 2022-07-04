const { JWTTokenCreator } = require("../helpers/auth");
const auth = require("../helpers/auth");

class AuthController {
  static session = (req, res) => {
    const { model } = req.body;
    model.findByEmail(req.body.email).then((user) => {
      const { email, password, etat } = user[0][0];
      auth
        .verifyPassword(req.body.password, password)
        .then((isVerify) => {
          if (isVerify) {
            const token = JWTTokenCreator(email, req.body.userType, etat);
            res
              .status(201)
              .cookie("user_token", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
              })
              .json({
                message: "Le mot de passe est correct",
                cookie: token,
                email,
                role: req.body.userType,
                etat,
              });
          } else {
            res.status(401).send("Email ou mot de passe incorect");
          }
        })
        .catch(() => {
          res.status(401).send("Email ou mot de passe incorect");
        });
    });
  };
}

module.exports = AuthController;
