const express = require('express');
const router = express.Router();

//create controller module to match 
const flightsCtrl = require("../controllers/flights");


//GET route for /flights 
router.get("/", flightsCtrl.index)

//GET route for /flights/new
router.get("/new", flightsCtrl.new)

// GET /flights/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);

//POST route for /flights
router.post("/", flightsCtrl.create) 



module.exports = router;
