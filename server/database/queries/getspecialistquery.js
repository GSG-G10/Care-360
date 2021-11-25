const connection = require('../connection');

const getspecialistquery = (name) => connection.query('SELECT name FROM doctors WHERE name ILIKE $1 ', [`${name}%`]);
module.exports = getspecialistquery;
