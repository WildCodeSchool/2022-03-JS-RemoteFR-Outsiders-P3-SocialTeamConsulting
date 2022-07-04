const AbstractManager = require("./AbstractManager");

const AccepteStatus = require("../JSON/AccepteStatus.json");

class AccepteManager extends AbstractManager {
  static table = "accepte";

  findAllWithIntervenant() {
    return this.connection.query(
      `SELECT i.id, i.nom, i.prenom, i.email  FROM ${AccepteManager.table} AS a INNER JOIN intervenants AS i ON a.intervenants_id = i.id INNER JOIN missions AS m ON a.missions_id = m.id WHERE a.missions_id = 2 AND a.isvalidated = 0`
    );
  }

  updateAccepteEtat(intervenant, mission) {
    return this.connection.query(
      `update ${AccepteManager.table} set isvalidated = ? where intervenants_id = ? AND missions_id = ?`,
      [AccepteStatus[1], intervenant, mission]
    );
  }

  updateAccepteEtatRefus(intervenant, mission) {
    return this.connection.query(
      `update ${AccepteManager.table} set isvalidated = ? where intervenants_id != ? AND missions_id = ?`,
      [AccepteStatus[2], intervenant, mission]
    );
  }
}

module.exports = AccepteManager;
