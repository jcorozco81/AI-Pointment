const router = require('express').Router();
const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');
// const controllerRoutes = require('../controllers');

router.use('/', homeRoutes);
// router.use('/controller', controllerRoutes);

// router.use('/api/v1');

router.use('/api', apiRoutes);

module.exports = router;