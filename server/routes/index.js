const router = require('express').Router();
const {
  error404,
  serverError,
  appointmentsId,
  getDoctor,
  getspecialist,
  appointmentsPost,
  books,
  deleteAppointment,
} = require('../controllers');
const userVerify = require('../middlewares');

router.get('/specialists', getspecialist);
router.get('/appointments/:id', appointmentsId);
router.get('/doctor/:id', getDoctor);
router.post('/appointments', appointmentsPost);
router.get('/books/:id', books);
router.post('/appointments', appointmentsPost);
router.delete('/appointments/:id', userVerify, deleteAppointment);

router.use(error404);
router.use(serverError);

module.exports = router;
