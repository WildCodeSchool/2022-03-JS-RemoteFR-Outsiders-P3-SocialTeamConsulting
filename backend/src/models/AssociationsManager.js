const AbstractManager = require("./AbstractManager");

class AssociationsManager extends AbstractManager {
  static table = "associations";
}

module.exports = AssociationsManager;
