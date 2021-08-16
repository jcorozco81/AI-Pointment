const catchAsync = require('../utils/catchAsync');
const { User } = require('../models');

exports.postUser = catchAsync(async (req, res) => {
  try {
    const userData = await User.create(req.body);

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all users
exports.getAllUsers = catchAsync(async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get specific user by ID
exports.getUser = catchAsync(async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    res.status(200).json(userData);
    if (!userData) {
      res.status(400).json({ message: 'User not found' });
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

//   Modify user
exports.putUser = catchAsync(async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(userData);
    if (!userData) {
      res.status(400).json({ message: 'User not found' });
    }

  } catch (err) {
    res.status(500).json(err);
  }
});



