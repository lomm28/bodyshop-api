const mongoose =require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    id: Number,
});

module.exports = mongoose.model('Client', clientSchema);