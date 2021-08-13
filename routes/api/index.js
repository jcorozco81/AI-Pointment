const router = require('express').Router();
const dialogFlowRoutes = require('./dialogFlow');
const authFlowRoutes = require('./auth');

const userRoutes = require('./userRoutes');
// const slotsRoutes = require('./slotsRoutes');

router.use('/dialog-flow', dialogFlowRoutes);

router.use('/user', userRoutes);
// router.use('/slots', slotsRoutes);


router.use('/auth', authFlowRoutes);


module.exports = router;