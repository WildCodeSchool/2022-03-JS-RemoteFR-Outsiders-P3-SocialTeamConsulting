const { verifyAccessToken } = require("./verifyAccessToken");

const middlewareAssociation = async (req, res, next) => {
  const data = await verifyAccessToken(req.cookies.user_token);
  if (data.role === "association" || data.role === "administrateur") {
    next();
  }
};

module.exports = { middlewareAssociation };
