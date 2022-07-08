const AbstractManager = require("./AbstractManager");

const AccepteStatus = require("../JSON/AccepteStatus.json");

class AccepteManager extends AbstractManager {
  static table = "accepte";

  findAllWithIntervenant(mission) {
    return this.connection.query(
      `SELECT i.id, i.nom, i.prenom, i.email, a.missions_id, a.isvalidated  FROM ${AccepteManager.table} AS a
       INNER JOIN intervenants AS i ON a.intervenants_id = i.id
       INNER JOIN missions AS m ON a.missions_id = m.id
       WHERE a.missions_id = ? AND a.isvalidated = 0`,
      [mission]
    );
  }

  findIntervenant(mission) {
    return this.connection.query(
      `SELECT i.id, i.nom, i.prenom, i.email, a.missions_id, a.isvalidated FROM ${AccepteManager.table} AS a
      INNER JOIN intervenants AS i ON a.intervenants_id = i.id
      INNER JOIN missions AS m ON a.missions_id = m.id
       WHERE a.missions_id = ? AND a.isvalidated != 0
       ORDER BY a.isvalidated ASC`,
      [mission]
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

  updateValidationInter(intervenant, mission) {
    return this.connection.query(
      `update ${AccepteManager.table} set isvalidated = ? where intervenants_id = ? AND missions_id = ?`,
      [AccepteStatus[1], intervenant, mission]
    );
  }

  updateValidationInterRefus(intervenant, mission) {
    return this.connection.query(
      `update ${AccepteManager.table} set isvalidated = ? where intervenants_id != ? AND missions_id = ?`,
      [AccepteStatus[2], intervenant, mission]
    );
  }

  updateRemoveEtatRefus(intervenant, mission) {
    return this.connection.query(
      `update ${AccepteManager.table} set isvalidated = ? where intervenants_id = ? AND missions_id = ?`,
      [AccepteStatus[0], intervenant, mission]
    );
  }

  updateRemoveEtatRefusAgain(intervenant, mission) {
    return this.connection.query(
      `update ${AccepteManager.table} set isvalidated = ? where intervenants_id != ? AND missions_id = ?`,
      [AccepteStatus[0], intervenant, mission]
    );
  }

  insert(missionId, userId) {
    return this.connection.query(
      `insert into ${AccepteManager.table} (intervenants_id, missions_id, isvalidated) values (?, ?, ?)`,
      [userId, missionId, 0]
    );
  }
}

module.exports = AccepteManager;
