const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0},
  flight: {type: mongoose.Types.ObjectId, 
    ref: 'Flight'
    // type: ObjectId, ref: "Flight"
}
}, {
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);