const connection = require('../connection');

const getspecialistquery = (name, speciality) => connection.query(`SELECT id, name, specialty, image FROM doctors WHERE name ILIKE '${name}%' or specialty ILIKE '${speciality}%'`);
module.exports = getspecialistquery;
