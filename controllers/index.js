const router = require('express').Router();
const userRoutes = require('./userRoutes');
const slotsRoutes = require('./slotsRoutes');

router.use('/user-routes', userRoutes);
router.use('/slots-routes', slotsRoutes);

module.exports = router;