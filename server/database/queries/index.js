const getAppontId = require('./getAppontId');
const getDoctor = require('./getDoctor');
const allSpecialists = require('./specialists');
const getspecialistquery = require('./getspecialistquery');
const setUserBook = require('./setUserBook');
const getDoctorBooks = require('./getDoctorBooks');
const { deleteAppointQuery, getAppointmentById } = require('./appointment');

module.exports = {
  getAppontId,
  getDoctor,
  allSpecialists,
  setUserBook,
  getDoctorBooks,
  getspecialistquery,
  deleteAppointQuery,
  getAppointmentById,
};
