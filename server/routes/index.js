const router = require('express').Router();
const {
  books,
  error404,
  serverError,
  postSpecialist,
  getSpecialists,
  appointmentsId,
  appointmentsPost,
} = require('../controllers');

router.get('/specialists', getSpecialists);
router.post('/specialist', postSpecialist);
router.get('/appointments/:id', appointmentsId);
router.post('/appointments', appointmentsPost);
router.get('/books/:id', books);
router.use(error404);
router.use(serverError);

module.exports = router;
