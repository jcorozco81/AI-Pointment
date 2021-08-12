// All through http://localhost:4000/controller/slots-routes

const router = require('express').Router();
const { Slots , User, Timeid, Service } = require('../models');

// Post: Create a new appointment

router.post('/', async (req, res) => {
    try {
      const slotsData = await Slots.create(req.body);
   
        res.status(200).json(slotsData);

    } catch (err) {
      res.status(400).json(err);
    }
  });

    // Get all Slots
  router.get('/', async (req, res) => {
    try {
      const slotsData = await Slots.findAll(
        {include: [{ model: Timeid }, { model: Service }], 
            attributes: { exclude: ['time_id', 'service_id'] }
          }
      );
      res.status(200).json(slotsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/date', async (req, res) => {
    try {
      const slotsData = await Slots.findAll({
        where: {
            date: req.body.date
          }
         } );
      res.status(200).json(slotsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/date', async (req, res) => {
    try {
      const slotsData = await Slots.findAll({
        where: {
            date: req.body.date
          }
         } );
      res.status(200).json(slotsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



// Get Slot by specific ID
  router.get('/slot/:id', async (req, res) => {
    try {
      const slotsData = await Slots.findByPk(req.params.id);
      res.status(200).json(slotsData);
if (!slotsData){
    res.status(400).json({ message: 'User not found' });
}
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   Modify user
  router.put('/:id', async (req, res) => {
    try {
      const slotsData = await Slots.update(req.body,{
        where: {
            id: req.params.id,
          },
      });
      res.status(200).json(slotsData);
if (!slotsData){
    res.status(400).json({ message: 'User not found' });
}

    } catch (err) {
      res.status(500).json(err);
    }
  });



  




module.exports = router;