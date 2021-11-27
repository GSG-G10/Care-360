const { getspecialist } = require('./specialists');
const {
  appointmentsId,
  appointmentsPost,
  books,
  deleteAppointment,
} = require('./appointments');
const { error404, serverError } = require('./errors');
const { signup, login } = require('./auth');

module.exports = {
  error404,
  serverError,
  appointmentsId,
  appointmentsPost,
  getspecialist,
  books,
  deleteAppointment,
  signup,
  login,
};
