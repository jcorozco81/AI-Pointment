const router = require('express').Router();



const dialogFlowController = require('./../../controllers/dialogFlow.js');


router.post('/', dialogFlowController.sendToDF);


module.exports = router;