const router = require('express').Router();
const {
  error404,
  serverError,
  appointmentsId,
  appointmentsPost,
} = require('../controllers');

router.get('/appointments/:id', appointmentsId);
router.post('/appointments', appointmentsPost);
router.use(error404);
router.use(serverError);

module.exports = router;
