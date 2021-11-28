const connection = require('../../connection');

const checkSpecialistEmail = async (email) => {
  const apoint = await connection.query('SELECT * FROM doctors WHERE email = $1', [email]);
  return apoint.rows[0];
};

module.exports = checkSpecialistEmail;
