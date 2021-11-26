const connection = require('../connection');

const checkEmail = (email) => connection.query('SELECT id from users where email=$1', [email]);
module.exports = checkEmail;
