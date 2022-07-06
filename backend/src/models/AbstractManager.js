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
    return this.connection.query(`select * from  ${this.table}`);
  }

  findByEmail(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = AbstractManager;
