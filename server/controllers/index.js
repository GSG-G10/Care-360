const { getDoctor } = require('./doctors');
const {
  appointmentsId,
  appointmentsPost,
  books,
  deleteAppointment,
} = require('./appointments');
const {
  getSpecialists,
  postSpecialist,
  getspecialist,
} = require('./specialists');
const { error404, serverError } = require('./errors');
const {
  signup, login, logout, userInfo,
} = require('./auth');

module.exports = {
  books,
  login,
  logout,
  signup,
  userInfo,
  error404,
  serverError,
  getspecialist,
  postSpecialist,
  getSpecialists,
  appointmentsId,
  appointmentsPost,
  getDoctor,
  deleteAppointment,
};
