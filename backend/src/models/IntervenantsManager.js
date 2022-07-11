const AbstractManager = require("./AbstractManager");

class IntervenantManager extends AbstractManager {
  static table = "intervenants";

  insert(intervenant) {
    return this.connection.query(
      `insert into ${IntervenantManager.table} (id, nom, prenom, email, telephone, password, image_cv, image_carte_vitale, image_statut_autoentrepreneur, pre_inscription_message, etat) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        intervenant.id,
        intervenant.nom,
        intervenant.prenom,
        intervenant.email,
        intervenant.telephone,
        intervenant.password,
        intervenant.image_cv,
        intervenant.image_carte_vitale,
        intervenant.image_statut_autoentrepreneur,
        intervenant.pre_inscription_message,
        intervenant.etat,
      ]
    );
  }

  update(intervenant) {
    return this.connection.query(
      `update ${IntervenantManager.table} SET nom= ?, prenom= ?, email= ?, telephone= ?
      WHERE ${IntervenantManager.table}.id = ?`,

      [
        intervenant.nom,
        intervenant.prenom,
        intervenant.email,
        intervenant.telephone,
        intervenant.id,
      ]
    );
  }

  updateEtat(intervenant) {
    return this.connection.query(
      `update ${IntervenantManager.table} SET etat= ?
      WHERE ${IntervenantManager.table}.id = ?`,

      [intervenant.etat, intervenant.id]
    );
  }
}

module.exports = IntervenantManager;
