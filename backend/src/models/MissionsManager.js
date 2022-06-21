const AbstractManager = require("./AbstractManager");

class MissionsManager extends AbstractManager {
  static table = "missions";

  findAllWithAssociation() {
    // return this.connection.query(`select * from  ${this.table}`);
    return this.connection.query(
      `SELECT m.*, a.nom FROM missions AS m INNER JOIN associations AS a ON m.associations_id = a.id`
    );
  }

  findValidatedMissions() {
    return this.connection.query(
      'SELECT * FROM MISSIONS WHERE etat = ("Validé")'
    );
  }
}

module.exports = MissionsManager;
