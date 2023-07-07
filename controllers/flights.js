const Flight = require("../models/flight")

module.exports = {
    index,
    show,
    new: newFlight,
    create
  };

   async function index(req,res) {
    const flights =  await Flight.find({})
    res.render("flights/index", { airline: "All Flights", flights });
  }

  async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { airline: 'Flight Details', flight });
  }

  function newFlight(req, res) {
    res.render('flights/new', { airline: "Add Flight", errorMsg: '' });
    
  }
 
  async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }