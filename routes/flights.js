const express = require('express');
const router = express.Router();

//create controller module to match 
const flightsCtrl = require("../controllers/flights");


//GET route for /flights/new
router.get("/new", flightsCtrl.new)

//POST route for /flights
router.post("/", flightsCtrl.create) 

//GET route for /flights 
router.get("/", flightsCtrl.index)

module.exports = router;
