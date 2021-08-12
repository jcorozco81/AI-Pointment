const router = require('express').Router();


router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/message-test', async (req, res) => {
  res.render('messageTest');
});


module.exports = router;