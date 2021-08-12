const router = require('express').Router();


router.get('/', async (req, res) => {
    res.render('homepage');
  });

  router.get('/profile', async (req, res) => {
    res.render('profile');
  });

  router.get('/register', async (req, res) => {
    res.render('profile');
  });


  module.exports = router;

  