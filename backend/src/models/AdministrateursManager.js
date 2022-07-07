const AbstractManager = require("./AbstractManager");

class AdministrateursManager extends AbstractManager {
  static table = "administrateurs";

  insert(administrateur) {
    return this.connection.query(
      `insert into ${AdministrateursManager.table} (id, nom, prenom, telephone, email, password) values (?, ?, ?, ?, ?, ?)`,
      [
        administrateur.id,
        administrateur.nom,
        administrateur.prenom,
        administrateur.telephone,
        administrateur.email,
        administrateur.password,
      ]
    );
  }

  update(administrateur) {
    return this.connection.query(
      `update ${AdministrateursManager.table} SET nom= ?, prenom= ?, email= ?, telephone= ?
      WHERE ${AdministrateursManager.table}.id = ?`,

      [
        administrateur.nom,
        administrateur.prenom,
        administrateur.email,
        administrateur.telephone,
        administrateur.id,
      ]
    );
  }
}

module.exports = AdministrateursManager;
