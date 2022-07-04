const AbstractManager = require("./AbstractManager");
const MissionStates = require("../JSON/MissionStates.json");

class MissionsManager extends AbstractManager {
  static table = "missions";

  findAllWithAssociation() {
    // return this.connection.query(`select * from  ${this.table}`);
    return this.connection.query(
      `SELECT m.*, a.nom FROM ${MissionsManager.table} AS m INNER JOIN associations AS a ON m.associations_id = a.id`
    );
  }

  updateEtat(mission, isValidated) {
    if (isValidated) {
      return this.connection.query(
        `update ${MissionsManager.table} set etat = ? where id = ?`,
        [MissionStates[1], mission]
      );
    }
    return this.connection.query(
      `update ${MissionsManager.table} set etat = ? where id = ?`,
      [MissionStates[2], mission]
    );
  }

  updatePourvue(mission) {
    return this.connection.query(
      `update ${MissionsManager.table} set etat = ? where id = ?`,
      [MissionStates[3], mission]
    );
  }
}

module.exports = MissionsManager;
