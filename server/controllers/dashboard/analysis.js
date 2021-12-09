const getAnalisis = require("../../database/queries/dashboard/getAnalysis");

const analisis = async (req, res, next) => {
  try {
    const analy = await getAnalisis();
    return res.json(analy);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  analisis,
};
