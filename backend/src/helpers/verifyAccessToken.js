const jwt = require("jsonwebtoken");
require("dotenv").config();

const accessTokenSecret = process.env.PRIVATE_KEY;

function verifyAccessToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, accessTokenSecret, (err, payload) => {
      if (err) {
        const message =
          err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
        reject(message);
      }
      resolve(payload);
    });
  });
}

module.exports = { verifyAccessToken };
