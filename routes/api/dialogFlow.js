const router = require('express').Router();
const dialogFlowRouter = require('./../../controllers/dialogFlow.js');


router.post('/', dialogFlowRouter.message);


module.exports = router;