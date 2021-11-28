const connection = require('../connection');

const addNewUser = (name, email, password, identity_number) => connection.query(
  'INSERT INTO users (name, email, password,identity_number ) VALUES($1,$2,$3,$4) RETURNING *;',
  [name, email, password, identity_number],
);
module.exports = addNewUser;
