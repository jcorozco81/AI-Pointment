const router = require('express').Router();
const dialogFlowRoutes = require('./dialogFlow');

router.use('/dialog-flow', dialogFlowRoutes);


module.exports = router;