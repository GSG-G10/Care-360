const { getspecialistquery, allSpecialists } = require('../../database/queries');

const getspecialist = async (req, res, next) => {
  try {
    const { name, speciality } = req.query;
    console.log({ name, speciality });
    if (name || speciality) {
      const { rows } = await getspecialistquery(name, speciality);
      return res.json({ data: rows });
    }
    const specialists = await allSpecialists();
    return res.json(specialists);
  } catch (err) {
    return next(err);
  }
};

module.exports = getspecialist;
