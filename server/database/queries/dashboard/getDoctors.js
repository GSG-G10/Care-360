const connection = require('../../connection');

const getDoctors = async () => {
  const apoint = await connection.query('SELECT * FROM doctors');
  return apoint.rows;
};

module.exports = getDoctors;
