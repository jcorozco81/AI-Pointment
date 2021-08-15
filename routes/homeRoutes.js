const router = require('express').Router();
// const userControllerRoute = require('../controllers/user');
const { User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  res.render('landing',{
    loggedIn: req.session.loggedIn
  });
});


router.get('/profile', withAuth, async (req, res) => {
  try {

    // Find the logged in user based on the session ID
    
    const userData = await User.findByPk(req.session.userid);

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('profile', {
      ...user,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


  router.get('/signup', async (req, res) => {
    res.render('signup');
  });

  router.get('/login', async (req, res) => {
    res.render('login');
  });





  

router.get('/message-test', async (req, res) => {
  res.render('messageTest');
});


module.exports = router;

