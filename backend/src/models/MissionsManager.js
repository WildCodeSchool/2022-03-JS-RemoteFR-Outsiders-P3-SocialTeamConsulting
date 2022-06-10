const AbstractManager = require("./AbstractManager");

class AssociationsManager extends AbstractManager {
  static table = "missions";
}

module.exports = AssociationsManager;
