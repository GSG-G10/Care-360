const connection = require('../connection');

const getDoctor = async (doctor_id) => {
  const apoint = await connection.query('SELECT * FROM doctors WHERE id = $1', [doctor_id]);
  return apoint.rows[0];
};

module.exports = getDoctor;
