const router = require('express').Router();
const { appointmentsId, appointmentsPost } = require('../controllers');

router.get('/appointments/:id', appointmentsId);
router.post('/appointments', appointmentsPost);

module.exports = router;
