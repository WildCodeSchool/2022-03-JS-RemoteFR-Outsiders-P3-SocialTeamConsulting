const AbstractManager = require("./AbstractManager");

class MessagesManager extends AbstractManager {
  static table = "messages";

  insert(message) {
    return this.connection.query(
      `insert into ${MessagesManager.table} (id, nom, email, telephone, message, ishandled) values (?, ?, ?, ?, ?, false)`,
      [
        message.id,
        message.nom,
        message.email,
        message.telephone,
        message.message,
        message.ishandled,
      ]
    );
  }

  showAllMessages() {
    return this.connection.query(`select * from messages`);
  }
}

module.exports = MessagesManager;
