const router = require('express').Router();
const {
  error404,
  serverError,
  appointmentsId,
  getspecialist,
} = require('../controllers');

router.get('/specialists', getspecialist);
router.get('/appointments/:id', appointmentsId);
router.use(error404);
router.use(serverError);

module.exports = router;
