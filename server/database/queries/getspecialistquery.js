const connection = require('../connection');

const getspecialistquery = async (name, speciality) =>
  connection.query(`SELECT name, specialty, image FROM doctors WHERE
  name ILIKE '${name}%' or
   specialty ILIKE '${speciality}%'`);
module.exports = getspecialistquery;
