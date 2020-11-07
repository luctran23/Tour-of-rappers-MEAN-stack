const mongoose = require('mongoose');

const RapperSchema = new mongoose.Schema({
    id: String,
    name: String
});

const Rapper  = mongoose.model('Rapper', RapperSchema, 'rappers');
module.exports = Rapper;
