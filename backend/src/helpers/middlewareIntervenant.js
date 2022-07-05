const middlewareIntervenant = (req, res, next) => {
  if (
    req.body.userType === "administrateur" ||
    req.body.userType === "intervenant"
  ) {
    next();
  }
};

module.exports = { middlewareIntervenant };
