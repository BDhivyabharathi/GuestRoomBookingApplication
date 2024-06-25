// Import necessary modules
const express = require('express');
const { createBooking, getUserBookings, getRoomBookings } = require('../controllers/bookingController');

// Initialize router
const router = express.Router();

// Define routes
//Router: The router is defined with a route for creating a booking, 
//linked to the corresponding controller function. 
//The protect middleware ensures that only authenticated users can create bookings.
router.route('/')
    .post(createBooking);
    
router.route('/user')
    .get(getUserBookings);

router.route('/room/:roomId')
    .get( getRoomBookings);

// Export the router
module.exports = router;
