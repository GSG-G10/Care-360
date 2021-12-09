const connection = require('../../connection');

const getUsers = async () => {
  const apoint = await connection.query('SELECT * FROM users');
  return apoint.rows;
};

module.exports = getUsers;
