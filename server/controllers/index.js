const { appointmentsId, appointmentsPost, books } = require('./appointments');
const { getSpecialists, postSpecialist } = require('./specialists');
const { error404, serverError } = require('./errors');

module.exports = {
  books,
  error404,
  serverError,
  postSpecialist,
  getSpecialists,
  appointmentsId,
  appointmentsPost,
};
