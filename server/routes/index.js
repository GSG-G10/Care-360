const router = require('express').Router();
const getspecialist = require('../controller')

router.get('/specialist', getspecialist);

module.exports = router;
