const mongoose = require('mongoose');
const Car = mongoose.model('Car');
const CarModel = require('../models/Car');

module.exports = app => {
    app.get("/api/cars", async (req, res) => {
      const cars = await Car.find({});
      res.send(cars);
    });
  
    app.post("/api/cars", async (req, res) => {
      const {
        id,
        plateNumber,
        color,
        model,
        chasisNumber,
        status,
        productionYear,
        issueDate,
        expiryDate,
        clientId, 
      } = req.body;
      const newCar = new CarModel({
        id,
        plateNumber,
        color,
        model,
        chasisNumber,
        status,
        productionYear,
        issueDate,
        expiryDate,
        clientId,
      });
      const car = await newCar.save();
      res.send(car);
    });

    app.get("/api/cars/client/:id", async (req, res) => {
        const clientId = req.params.id;
    
        Car.findById(clientId, (err, car) => {
          if (err) return res.status(500).send("There was a problem finding the cars.");
          if (!car) return res.status(404).send("No cars found.");
          res.status(200).send(car);
        });
      });
  }