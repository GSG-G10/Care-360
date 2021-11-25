const { getspecialistquery, allSpecialists } = require('../../database/queries');

const getspecialist = async (req, res, next) => {
  try {
    const { name, speciality } = req.query;
    if (name || speciality) {
      const { rows } = await getspecialistquery(name, speciality);
      return res.json({ data: rows });
    }
    return res
      .json({ data: await allSpecialists() });
  } catch (err) {
    return next(err);
  }
};

module.exports = getspecialist;
