const { getspecialistquery } = require('../../database/queries');

const getspecialist = async (req, res, next) => {
  try {
    const { name, speciality } = req.query;
    if (name || speciality) {
      const { rows } = await getspecialistquery(name, speciality);
      return res.json(rows);
    }
    return res
      .status(400)
      .json({ message: 'write the Name ' });
  } catch (err) {
    return next(err);
  }
};

module.exports = getspecialist;
