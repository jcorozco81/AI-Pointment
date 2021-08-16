const router = require('express').Router();

const slotsControllerRoute = require('../../controllers/slots');


// Address http://localhost:4000/api/v1/slots/

router.post('/', slotsControllerRoute.postAppointment);
router.get('/', slotsControllerRoute.getAllAppointment);
router.get('/by-date', slotsControllerRoute.getAppointmentByDate);
router.get('/by-user', slotsControllerRoute.getAppointmentByUser);
router.get('/:id', slotsControllerRoute.getAppointmentById);
router.put('/:id', slotsControllerRoute.putAppointment);



module.exports = router;