const { appointmentsId, appointmentsPost, books } = require('./appointments');
const { getDoctor } = require('./doctors');
const { getspecialist } = require('./specialists');
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
const { signup, login, logout } = require('./auth');

module.exports = {
  books,
  login,
  logout,
  signup,
  error404,
  serverError,
  getspecialist,
  postSpecialist,
  getSpecialists,
  appointmentsId,
  appointmentsPost,
  getDoctor,
  getspecialist,
  books,
  deleteAppointment,
};
