class AbstractManager {
  constructor(connection, table) {
    this.connection = connection;
    this.table = table;
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findOne(email) {
    return this.connection
      .query("SELECT * FROM associations WHERE email = ?", [email])
      .then((res) => res[0]);
  }

  findAll() {
    return this.connection.query(
      `select * from  ${this.table} ORDER BY nom ASC`
    );
  }

  findByEmail(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  updateMDP(password, intervenant) {
    return this.connection.query(
      `update ${this.table} set password = ? where id = ?`,
      [password, intervenant]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = AbstractManager;
