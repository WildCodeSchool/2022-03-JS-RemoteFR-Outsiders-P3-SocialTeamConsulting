const AbstractManager = require("./AbstractManager");

class ModificationsManager extends AbstractManager {
  static table = "modifications";

  insert(modification) {
    return this.connection.query(
      `insert into ${ModificationsManager.table} (nom, prenom, adresse, code_postal, ville) values (?,?,?,?,?)`,
      [
        modification.nom,
        modification.prenom,
        modification.adresse,
        modification.code_postal,
        modification.ville,
      ]
    );
  }
}

module.exports = ModificationsManager;
