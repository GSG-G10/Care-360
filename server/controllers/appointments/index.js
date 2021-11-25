const { appointmentsId } = require('./appointments');
const { appointmentsPost } = require('./appointmentsPost');
const { books } = require('./books');
const deleteAppointment = require('./deleteappointment');

module.exports = {
  appointmentsId, appointmentsPost, books, deleteAppointment,
};
