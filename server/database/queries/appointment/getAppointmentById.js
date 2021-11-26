const connection = require('../../connection');

const getAppointmentById = (id) => connection.query('SELECT * FROM appointments WHERE id=$1', [id]);

module.exports = getAppointmentById;
