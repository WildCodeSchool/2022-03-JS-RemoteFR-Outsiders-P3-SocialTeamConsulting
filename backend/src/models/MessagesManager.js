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

  close(messageID) {
    return this.connection.query(
      `update ${MessagesManager.table}
       SET ishandled = 1
       WHERE id = ?`,
      [messageID]
    );
  }
}

module.exports = MessagesManager;
