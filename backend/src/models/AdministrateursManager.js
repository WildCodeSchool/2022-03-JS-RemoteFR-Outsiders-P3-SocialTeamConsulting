const AbstractManager = require("./AbstractManager");

class AdministrateursManager extends AbstractManager {
  static table = "administrateurs";
}

module.exports = AdministrateursManager;
