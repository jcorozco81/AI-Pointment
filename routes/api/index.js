const router = require('express').Router();
const dialogFlowRoutes = require('./dialogFlow');
const authFlowRoutes = require('./auth');

router.use('/dialog-flow', dialogFlowRoutes);



router.use('/auth', authFlowRoutes);


module.exports = router;