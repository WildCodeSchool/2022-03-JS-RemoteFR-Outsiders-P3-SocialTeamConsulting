const middlewareAssociation = (req, res, next) => {
  if (
    req.body.userType === "administrateur" ||
    req.body.userType === "association"
  ) {
    next();
  }
};

module.exports = { middlewareAssociation };
