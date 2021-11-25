const { appointmentsId, appointmentsPost } = require('./appointments');
const getSpecialists = require('./specialists');
const { getDoctor } = require('./doctors');
const { error404, serverError } = require('./errors');

module.exports = {
  error404,
  serverError,
  getSpecialists,
  appointmentsId,
  appointmentsPost,
  getDoctor,
};
