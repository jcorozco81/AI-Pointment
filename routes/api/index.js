const router = require('express').Router();
const dialogFlowRoutes = require('./dialogFlow');
const authFlowRoutes = require('./auth');

const userRoutes = require('./userRoutes');
const slotsRoutes = require('./slotsRoutes');
const serviceRoutes = require('./serviceRoutes');

router.use('/dialog-flow', dialogFlowRoutes);

// db Routes
router.use('/user', userRoutes);
router.use('/slots', slotsRoutes);
router.use('/service', serviceRoutes);


router.use('/auth', authFlowRoutes);


module.exports = router;