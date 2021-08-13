const router = require('express').Router();


router.get('/', async (req, res) => {
  res.render('landing');
});


  router.get('/profile', async (req, res) => {
    res.render('profile');
  });

  router.get('/register', async (req, res) => {
    res.render('profile');
  });




  

router.get('/message-test', async (req, res) => {
  res.render('messageTest');
});


module.exports = router;

