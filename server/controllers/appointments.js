const getAppontId = require('../database/queries/index');

const appointmentsId = (req, res, next) => {
  getAppontId(req.params.id)
    .then((data) => {
      res.json(data);
    });
  // next();
};

const appointmentsPost = (req, res, next) => {
  console.log('start post');
  res.json({ we: ' post' });
  // next();
};

module.exports = {
  appointmentsId, appointmentsPost,
};
