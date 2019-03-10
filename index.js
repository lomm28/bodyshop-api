const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const keys = require('./config/keys');
require('./models/Client');

const app = express();

app.use(bodyParser.json());

require('./routes/clientRoutes')(app);

mongoose.connect(
  keys.mongoURI, 
  { useNewUrlParser: true },
);

mongoose.connection.once('open', () => console.log('connected to MongoDB'));

const port = process.env.PORT || 3000;
app.listen(port);

console.log('bodyshop server started on: ' + port);

const handleError = (res, reason, message, code) => {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ 'error': message });
};