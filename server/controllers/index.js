const { getspecialist } = require('./specialists');
const {
  appointmentsId, appointmentsPost, books, deleteAppointment,
} = require('./appointments');
const { error404, serverError } = require('./errors');

module.exports = {
  error404,
  serverError,
  appointmentsId,
  appointmentsPost,
  getspecialist,
  books,
  deleteAppointment,
};
