const router = require('express').Router();
const dialogFlowRouter = ('./../../controllers/dialogFlow.js');

router.post('/', dialogFlowRouter.message);


module.exports = router;