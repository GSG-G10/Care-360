const { appointmentsId, appointmentsPost } = require('./appointments');
const { getspecialist } = require('./specialists');
const { error404, serverError } = require('./errors');

module.exports = {
  error404,
  serverError,
  appointmentsId,
  appointmentsPost,
  getspecialist,
};
