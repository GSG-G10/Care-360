const { allSpecialists } = require('../../database/queries');

const getSpecialists = async (req, res, next) => {
  try {
    const specialists = await allSpecialists();
    if (!specialists.length > 0) {
      return res.json({ message: 'No Specialists Found' });
    }
    return res.json(specialists);
  } catch (err) {
    return next(err);
  }
};

module.exports = getSpecialists;
