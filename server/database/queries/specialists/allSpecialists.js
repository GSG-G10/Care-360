const connection = require('../../connection');

const allSpecialists = async () => {
  const { rows } = await connection.query('SELECT id, name, specialty, image FROM doctors');
  return rows;
};

module.exports = allSpecialists;
