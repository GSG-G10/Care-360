const {
  deleteAppointQuery,
  getAppointmentById,
} = require('../../database/queries');

const deleteAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req;
    if (Number(id) > 0) {
      const { rows } = await getAppointmentById(id);
      if (rows.length > 0) {
        const { user_id: ownerId } = rows[0];
        if (Number(userId) === ownerId) {
          await deleteAppointQuery(id);
          return res.json({ message: 'deleted successfully' });
        }
        return res.status(403).json({ message: 'You Don\'t Have Permession' });
      }
      return res.status(404).json({ message: 'Nothing To Delete' });
    }
    return res.status(400).json({ message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};
module.exports = deleteAppointment;
