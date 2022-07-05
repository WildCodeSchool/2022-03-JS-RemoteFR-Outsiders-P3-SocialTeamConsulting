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
}

module.exports = AdministrateursManager;
