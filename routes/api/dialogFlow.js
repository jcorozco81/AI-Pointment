const router = require('express').Router();

// Commented to test controller routes
const dialogFlowRouter = require('./../../controllers/dialogFlow.js');

router.post('/', dialogFlowRouter.message);


module.exports = router;