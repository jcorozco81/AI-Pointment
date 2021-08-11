const router = require('express').Router();
const apiRoutes = require('./api/index');

router.use('./api/v1');

module.exports = router;