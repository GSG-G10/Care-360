const getDoctorBooks = require('../../database/queries/getDoctorBooks');

const books = async (req, res, next) => {
  try {
    const book = await getDoctorBooks(req.params.id);
    return res.json(book);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  books,
};
