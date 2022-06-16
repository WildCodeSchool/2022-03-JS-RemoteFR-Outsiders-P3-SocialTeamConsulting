const AbstractManager = require("./AbstractManager");

class AssociationsManager extends AbstractManager {
  static table = "associations";

  insert(association) {
    return this.connection.query(
      `insert into ${AssociationsManager.table} (id, nom, email, telephone, password, adresse, code_postal, ville, pre_inscription_message, etat) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        association.id,
        association.nom,
        association.email,
        association.telephone,
        association.password,
        association.adresse,
        association.code_postal,
        association.ville,
        association.pre_inscription_message,
        association.etat,
      ]
    );
  }
}

module.exports = AssociationsManager;
