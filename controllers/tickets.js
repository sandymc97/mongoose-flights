const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
  
module.exports = {
    create,
    new: newTicket,
};
async function create(req, res) {
    try {
      await Ticket.create(req.body);
    } catch (err) {
      console.log(err);
    }
    res.redirect('/tickets/new');
  }
  
async function newTicket(req, res) {
  const tickets = await Ticket.find({}).sort('seat');
  res.render('tickets/new', { airline: 'Add Ticket', tickets });
}

