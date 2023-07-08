const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]
  },
    arrival: {
      type: Date,
    }
  }, {
    timestamps: true
});


const flightSchema = new Schema({
  airline: {
    type: String,
      enum: ['American', 'Southwest', 'United']},
    airport: {
        type: String,
        enum: ['DEN', 'AUS', 'ATL', 'LAX', 'SAN'],
        default: 'DEN'},
  flightNo: {
    type: Number,
    min: 10,
        max: 9999},
  departs: {
        type: Date
        // default: {
        //   //  const yearFromNow = new Date();
        //   //  return yearFromNow.setFullYear(yearFromNow.getFullYear() + 1)
        // }
     },
   destination: [destinationSchema] 
  },
{
    timestamps: true
});

module.exports = mongoose.model("Flight", flightSchema);