const router = require('express').Router();
const {
  login,
  books,
  signup,
  logout,
  error404,
  serverError,
  getDoctor,
  getspecialist,
  appointmentsId,
  postSpecialist,
  appointmentsPost,
  deleteAppointment,
} = require('../controllers');
const { analisis } = require('../controllers/dashboard/analysis');
const { doctorsAll } = require('../controllers/dashboard/get-doctors');
const { usersAll } = require('../controllers/dashboard/get-users');
const { userVerify, checkUserExist } = require('../middlewares');

router.post('/specialist', postSpecialist);
router.get('/specialists', getspecialist);
router.get('/appointments/:id', appointmentsId);
router.get('/doctor/:id', getDoctor);
router.post('/appointments', appointmentsPost);
router.get('/books/:id', books);
router.post('/signup', checkUserExist, signup);
router.get('/logout', logout);
router.post('/login', login);
router.get('/users', usersAll);
router.get('/doctors', doctorsAll);
router.get('/analysis', analisis);
router.delete('/appointments/:id', userVerify, deleteAppointment);
router.use(error404);
router.use(serverError);

module.exports = router;
