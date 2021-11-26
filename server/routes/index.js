const router = require('express').Router();
const {
  error404,
  serverError,
  appointmentsId,
  getspecialist,
  appointmentsPost,
  books,
} = require('../controllers');

router.get('/specialists', getspecialist);
router.get('/appointments/:id', appointmentsId);
router.post('/appointments', appointmentsPost);
router.get('/books/:id', books);
router.use(error404);
router.use(serverError);

module.exports = router;
