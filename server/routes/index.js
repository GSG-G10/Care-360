const router = require('express').Router();
const {
  error404,
  serverError,
  getSpecialists,
  appointmentsId,
  getDoctor,
  appointmentsPost,
  books,
} = require('../controllers');

router.get('/specialists', getSpecialists);
router.get('/appointments/:id', appointmentsId);
router.get('/doctor/:id', getDoctor);
router.post('/appointments', appointmentsPost);
router.get('/books/:id', books);
router.use(error404);
router.use(serverError);

module.exports = router;
