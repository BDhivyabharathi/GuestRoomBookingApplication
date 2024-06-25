// Import necessary modules
const express = require('express');
const { createRoom, getRooms, getRoomById, updateRoom, deleteRoom } = require('../controllers/roomController');

// Initialize router
const router = express.Router();

// Define routes
//Router: The router is defined with routes for creating, reading, updating,
// and deleting rooms, linked to corresponding controller functions. 
//The protect middleware ensures that only authenticated users can create, update,
// or delete rooms.
router.route('/') //normal user
    .get(getRooms)
    .post(createRoom);

router.route('/:id') //for owner
    .get(getRoomById)
    .put(updateRoom)
    .delete(deleteRoom);

// Export the router
module.exports = router;
