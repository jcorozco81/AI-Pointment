const router = require('express').Router();
const dialogFlowRoutes = require('./dialogFlow');

const userRoutes = require('./userRoutes');
// const slotsRoutes = require('./slotsRoutes');

router.use('/dialog-flow', dialogFlowRoutes);

router.use('/user', userRoutes);
// router.use('/slots', slotsRoutes);

module.exports = router;