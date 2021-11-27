const { appointmentsId, appointmentsPost, books } = require('./appointments');
const { getDoctor } = require('./doctors');
const { getspecialist } = require('./specialists');
const {
  appointmentsId,
  appointmentsPost,
  books,
  deleteAppointment,
} = require('./appointments');
const { error404, serverError } = require('./errors');
const { signup, login, logout } = require('./auth');

module.exports = {
  error404,
  serverError,
  appointmentsId,
  appointmentsPost,
  getDoctor,
  getspecialist,
  books,
  deleteAppointment,
  signup,
  login,
  logout,
};
