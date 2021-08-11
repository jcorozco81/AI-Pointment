const router = require('express').Router();
const authRouter = ('./../../controllers/auth.js');

router.post('/login', authRouter.login);
router.post('/signup', authRouter.signUp);
router.post('/logout', authRouter.logout);



module.exports = router;