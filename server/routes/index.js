const router = require('express').Router();
const {
  error404,
  serverError,
  getSpecialists,
  appointmentsId,
  getDoctor,
} = require('../controllers');

router.get('/specialists', getSpecialists);
router.get('/appointments/:id', appointmentsId);
router.get('/doctor/:id', getDoctor);
router.use(error404);
router.use(serverError);

module.exports = router;
