const { verifyAccessToken } = require("./verifyAccessToken");

const middlewareAdministrateur = async (req, res, next) => {
  const data = await verifyAccessToken(req.cookies.user_token);
  if (data.role === "administrateur") {
    next();
  }
};

module.exports = { middlewareAdministrateur };
