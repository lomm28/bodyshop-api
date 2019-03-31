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
        const clientsCars = await Car.find({ clientId: req.params.id });
        res.send(clientsCars);
      });
  }