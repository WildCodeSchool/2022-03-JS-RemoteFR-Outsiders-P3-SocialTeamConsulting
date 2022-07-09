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

  findMissionsWhereUserRefused(userId) {
    return this.connection.query(
      `SELECT missions_id FROM ${this.table} WHERE isvalidated = 2 AND intervenants_id = ?`,
      [userId]
    );
  }

  findUserRefusedByMission(missionId) {
    return this.connection.query(
      `SELECT intervenants_id FROM ${this.table} WHERE isvalidated = 2 AND missions_id = ?`,
      [missionId]
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

  insert(missionId, userId) {
    return this.connection.query(
      `insert into ${AccepteManager.table} (intervenants_id, missions_id, isvalidated) values (?, ?, ?)`,
      [userId, missionId, 0]
    );
  }

  deleteByIntervenant(missionId, userId) {
    return this.connection.query(
      `DELETE FROM ${this.table} WHERE intervenants_id = ? AND missions_id = ?`,
      [userId, missionId]
    );
  }

  resetMissionAccepte(missionId, userId) {
    return this.connection.query(
      `UPDATE ${this.table} SET isvalidated = 0 where intervenants_id = ? AND missions_id = ?`,
      [userId, missionId]
    );
  }
}

module.exports = AccepteManager;
