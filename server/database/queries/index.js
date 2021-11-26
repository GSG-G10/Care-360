const getAppontId = require('./getAppontId');
const getDoctor = require('./getDoctor');
const { allSpecialists, addSpecialist, checkSpecialistEmail } = require('./specialists');
const setUserBook = require('./setUserBook');
const getDoctorBooks = require('./getDoctorBooks');

module.exports = {
  getDoctor,
  setUserBook,
  getAppontId,
  addSpecialist,
  allSpecialists,
  getDoctorBooks,
  checkSpecialistEmail,
};
