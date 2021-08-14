const catchAsync = require('../utils/catchAsync');
// const router = require('express').Router();
const { Service } = require('../models');

// router.post('/', 

exports.postServices = catchAsync(async (req, res) => {
    try {
      const serviceData = await Service.create(req.body);
  

        res.status(200).json(serviceData);
    //   });
    } catch (err) {
      res.status(400).json(err);
    }
  });

    // Get all services

  // router.get('/', 
  exports.getAllServices = catchAsync(async (req, res) => {
    try {
      const serviceData = await Service.findAll();
      res.status(200).json(serviceData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Get specific service by ID
  // router.get('/:id', 

  exports.getServices = catchAsync(async (req, res) => {
    try {
      const serviceData = await Service.findByPk(req.params.id);
      res.status(200).json(serviceData);
if (!serviceData){
    res.status(400).json({ message: 'Service not found' });
}

    } catch (err) {
      res.status(500).json(err);
    }
  });

//   Modify service
  // router.put('/:id', 
  
  exports.putServices = catchAsync(async (req, res) => {
    try {
      const serviceData = await Service.update(req.body,{
        where: {
            id: req.params.id,
          },
      });
      res.status(200).json(serviceData);
if (!serviceData){
    res.status(400).json({ message: 'Service not found' });
}

    } catch (err) {
      res.status(500).json(err);
    }
  });