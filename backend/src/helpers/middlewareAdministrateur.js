const middlewareAdministrateur = (req, res, next) => {
  if (req.body.userType === "administrateur") {
    next();
  }
};

module.exports = { middlewareAdministrateur };
