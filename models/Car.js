const mongoose =require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
  id: Number,
  plateNumber: String,
  color: String,
  model: String,
  chasisNumber:	String,
  status: String,
  productionYear: Number,
  issueDate: String,
  expiryDate: String,
  clientId: Number,
});

module.exports = mongoose.model('Car', carSchema);
