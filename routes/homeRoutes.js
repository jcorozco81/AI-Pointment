const router = require('express').Router();
// const userControllerRoute = require('../controllers/user');
const { User } = require('../models');


router.get('/', async (req, res) => {
  res.render('landing');
});


  router.get('/profile', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(1);
  
      const user = userData.get({ plain: true });
      console.log(user);
  
      res.render('profile', {
        ...user});
    } catch (err) {
      res.status(500).json(err);
    }
  });









  router.get('/signup', async (req, res) => {
    res.render('signup');
  });

  router.get('/confirmation', async (req, res) => {
    res.render('confirmation');
  });

  router.get('/login', async (req, res) => {
    res.render('login');
  });





  

router.get('/message-test', async (req, res) => {
  res.render('messageTest');
});


module.exports = router;




// const router = require('express').Router();
// // const userControllerRoute = require('../controllers/user');
// const { User } = require('../models');


// router.get('/', async (req, res) => {
//   res.render('landing');
// });


//   router.get('/profile', async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(1);
  
//       const user = userData.get({ plain: true });
//       console.log(user);
  
//       res.render('profile', {
//         ...user});
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });









//   router.get('/signup', async (req, res) => {
//     res.render('signup');
//   });

//   router.get('/login', async (req, res) => {
//     res.render('login');
//   });





  

// router.get('/message-test', async (req, res) => {
//   res.render('messageTest');
// });


// module.exports = router;

