const AbstractManager = require("./AbstractManager");
const MissionStates = require("../JSON/MissionStates.json");

class MissionsManager extends AbstractManager {
  static table = "missions";

  insert(mission) {
    return this.connection.query(
      `insert into ${MissionsManager.table} (intitule, metier, adresse, code_postal, ville, description, horaire_debut, horaire_fin, date_debut, date_fin, total_heure, etat, associations_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        mission.intitule,
        mission.metier,
        mission.adresse,
        mission.code_postal,
        mission.ville,
        mission.description,
        mission.horaire_debut,
        mission.horaire_fin,
        mission.date_debut,
        mission.date_fin,
        mission.total_heure,
        mission.etat,
        mission.associations_id,
      ]
    );
  }

  findAllWithAssociation() {
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

  findValidatedMissions() {
    return this.connection.query(
      'SELECT m.*, a.nom FROM MISSIONS AS m INNER JOIN associations AS a ON m.associations_id = a.id WHERE m.etat = ("Validé")'
    );
  }

  findMyMissions(user) {
    return this.connection.query(
      `SELECT a.*, m.*, asso.nom FROM ${this.table} AS m INNER JOIN accepte AS a ON a.missions_id = m.id INNER JOIN associations AS asso ON m.associations_id = asso.id WHERE a.intervenants_id = '${user}' ORDER BY m.date_debut`
    );
  }

  findMyMissionsNotAccepted(userId) {
    return this.connection.query(
      `SELECT missions.*, associations.nom FROM ${this.table}
INNER JOIN associations ON associations.id = ${this.table}.associations_id
       WHERE ${this.table}.etat="acceptée"
       AND ${this.table}.id NOT IN (
          SELECT missions_id FROM accepte WHERE accepte.intervenants_id = ?)`,
      [userId]
    );
  }
}

module.exports = MissionsManager;
