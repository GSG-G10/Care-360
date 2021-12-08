const connection = require('../../connection');

const getAnalisis = async () => {
  const countUsers = await connection.query('SELECT count(*) FROM users;');
  const countDoctors = await connection.query('SELECT count(*) FROM doctors;');
  const COuntAppointments = await connection.query(
    'SELECT count(*) FROM appointments;',
  );

  return {
    countUser: countUsers.rows[0].count,
    CountDocs: countDoctors.rows[0].count,
    CountAppoints: COuntAppointments.rows[0].count,
  };
};

module.exports = getAnalisis;
