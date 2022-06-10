const AbstractManager = require("./AbstractManager");

class IntervenantManager extends AbstractManager {
  static table = "intervenants";
}

module.exports = IntervenantManager;
