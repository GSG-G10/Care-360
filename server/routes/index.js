const router = require('express').Router();
const { appointmentsId, appointmentsPost, getspecialist} = require('../controllers');

router.get('/specialist', getspecialist);
router.get('/appointments/:id', appointmentsId);
router.post('/appointments', appointmentsPost);

module.exports = router;
