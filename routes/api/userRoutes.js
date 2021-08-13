const router = require('express').Router();

const userControllerRoute = require('../../controllers/user');

router.post('/', userControllerRoute.postUser);
router.get('/', userControllerRoute.getAllUsers);
router.get('/:id', userControllerRoute.getUser);
router.put('/:id', userControllerRoute.putUser);



module.exports = router;