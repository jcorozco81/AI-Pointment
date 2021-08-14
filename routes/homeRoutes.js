const router = require('express').Router();


router.get('/', async (req, res) => {
  res.render('landing');
});


  router.get('/profile', async (req, res) => {
    res.render('profile');
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

