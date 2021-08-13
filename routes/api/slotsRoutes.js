const router = require('express').Router();

const slotsControllerRoute = require('../../controllers/slots');

router.post('/', slotsControllerRoute.postUser);
router.get('/', slotsControllerRoute.getAllUsers);
router.get('/:id', slotsControllerRoute.getUser);
router.put('/:id', slotsControllerRoute.putUser);



module.exports = router;