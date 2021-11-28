const getAppontId = require('./getAppontId');
const getDoctor = require('./getDoctor');
const { allSpecialists, addSpecialist, checkSpecialistEmail } = require('./specialists');
const getspecialistquery = require('./getspecialistquery');
const setUserBook = require('./setUserBook');
const getDoctorBooks = require('./getDoctorBooks');
const { deleteAppointQuery, getAppointmentById } = require('./appointment');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
const getUser = require('./getUser');

module.exports = {
  getUser,
  getDoctor,
  checkEmail,
  addNewUser,
  setUserBook,
  getAppontId,
  addSpecialist,
  allSpecialists,
  getDoctorBooks,
  getspecialistquery,
  deleteAppointQuery,
  getAppointmentById,
  checkSpecialistEmail,
};
