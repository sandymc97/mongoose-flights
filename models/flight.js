const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: {type: Date,
        default: new Date(+new Date() + 7*24*60*60*1000)}
})

module.exports = mongoose.model("Flight", flightSchema);