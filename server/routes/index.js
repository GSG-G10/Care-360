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
  signup,
  login,
  logout,
} = require('../controllers');
const { userVerify, checkUserExist } = require('../middlewares');

router.get('/specialists', getspecialist);
router.get('/appointments/:id', appointmentsId);
router.get('/doctor/:id', getDoctor);
router.post('/appointments', appointmentsPost);
router.get('/books/:id', books);
router.post('/signup', checkUserExist, signup);
router.get('/logout', logout);
router.post('/login', login);
router.delete('/appointments/:id', userVerify, deleteAppointment);

router.use(error404);
router.use(serverError);

module.exports = router;
