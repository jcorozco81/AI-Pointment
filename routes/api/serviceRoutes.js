const router = require('express').Router();

const serviceControllerRoute = require('../../controllers/service');


// Address http://localhost:4000/api/v1/slots/

router.post('/', serviceControllerRoute.postServices);
router.get('/', serviceControllerRoute.getAllServices);
router.get('/:id', serviceControllerRoute.getServices);
router.put('/:id', serviceControllerRoute.putServices);



module.exports = router;