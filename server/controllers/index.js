const { appointmentsId, appointmentsPost } = require('./appointments');
const getSpecialists = require('./specialists');
const { error404, serverError } = require('./errors');

module.exports = {
  error404,
  serverError,
  getSpecialists,
  appointmentsId,
  appointmentsPost,
};
