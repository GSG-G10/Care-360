const { appointmentsId, appointmentsPost } = require('./appointments');
const { error404, serverError } = require('./errors');

module.exports = {
  appointmentsId, appointmentsPost, error404, serverError,
};
