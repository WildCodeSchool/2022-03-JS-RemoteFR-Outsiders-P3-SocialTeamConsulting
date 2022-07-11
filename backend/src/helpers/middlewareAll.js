const { verifyAccessToken } = require("./verifyAccessToken");

const middlewareAll = async (req, res, next) => {
  const data = await verifyAccessToken(req.cookies.user_token);
  if (
    data.role === "administrateur" ||
    data.role === "intervenant" ||
    data.role === "association"
  ) {
    next();
  }
};

module.exports = { middlewareAll };
