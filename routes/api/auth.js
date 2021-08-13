// const bcrypt = require('bcrypt');
const router = require('express').Router();
const authRouter = require('../../controllers/auth');

router.post('/login', authRouter.logIn);
router.post('/signup', authRouter.signUp);
router.post('/logout', authRouter.logOut);

router.get('/', async (req, res) => {
    res.render('homepage');
  });



module.exports = router;