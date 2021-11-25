const { appointmentsId, appointmentsPost, books } = require('./appointments');
const getSpecialists = require('./specialists');
const { getDoctor } = require('./doctors');
const { error404, serverError } = require('./errors');

module.exports = {
  error404,
  serverError,
  getSpecialists,
  appointmentsId,
  appointmentsPost,
<<<<<<< HEAD
  getDoctor,
=======
  books,
>>>>>>> 743e9cfea99224473680b2dba17baf2fb2125ba8
};
