const mongoose = require('mongoose');
const Client = mongoose.model('Client');
const ClientModel = require('../models/Client');

module.exports = app => {
  app.get("/api/clients", async (req, res) => {
    const clients = await Client.find({});
    res.send(clients);
  });

  app.post("/api/clients", async (req, res) => {
    const { firstName, lastName, email, phone, id } = req.body;
    const newClient = new ClientModel({
      firstName,
      lastName,
      email, 
      phone,
      id,
    });
    const client = await newClient.save();
    res.send(client);
  });
}