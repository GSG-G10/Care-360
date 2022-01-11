const connection = require('../../connection');

const checkDataEmail = (email) =>
  connection.query(`select exists(select 1 from doctors where email = $1);`, [
    email,
  ]);

const checkSpecialistEmail = async (email) => {
  const apoint = await checkDataEmail(email);
  return apoint.rows[0].exists;
};

module.exports = checkSpecialistEmail;
