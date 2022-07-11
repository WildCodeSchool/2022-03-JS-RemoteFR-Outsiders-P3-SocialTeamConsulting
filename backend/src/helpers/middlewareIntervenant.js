const { verifyAccessToken } = require("./verifyAccessToken");

const middlewareIntervenant = async (req, res, next) => {
  const data = await verifyAccessToken(req.cookies.user_token);
  if (data.role === "intervenant" || data.role === "administrateur") {
    next();
  }
};

module.exports = { middlewareIntervenant };
