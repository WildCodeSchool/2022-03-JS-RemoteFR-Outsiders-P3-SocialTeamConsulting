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

  update(association) {
    return this.connection.query(
      `update ${AssociationsManager.table} SET nom = ?, adresse = ?, ville = ?, code_postal = ?, email = ?, telephone = ?
      WHERE ${AssociationsManager.table}.id = ?`,

      [
        association.nom,
        association.adresse,
        association.ville,
        association.code_postal,
        association.email,
        association.telephone,
        association.id,
      ]
    );
  }

  updateEtat(association) {
    return this.connection.query(
      `update ${AssociationsManager.table} SET etat= ?
      WHERE ${AssociationsManager.table}.id = ?`,

      [association.etat, association.id]
    );
  }
}

module.exports = AssociationsManager;
