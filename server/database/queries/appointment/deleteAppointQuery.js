const connection = require('../../connection');

const deleteAppointQuery = (id) => connection.query('DELETE FROM appointments WHERE id = $1', [id]);

module.exports = deleteAppointQuery;
