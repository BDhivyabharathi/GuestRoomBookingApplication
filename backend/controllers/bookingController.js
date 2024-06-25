// Import necessary modules
const Booking = require('../models/Booking');
const Room = require('../models/Room');

// Function to create a booking
//Create Booking: This function handles creating a new booking. 
//It calculates the total price based on the room's rent per day 
//and the booking duration, then saves the booking.
const createBooking = async (req, res) => {
    const { roomId, startDate, endDate } = req.body;

    try {
        const room = await Room.findById(roomId);

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        const bookingDays = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + 1;

        if (bookingDays < room.minBookingDays || bookingDays > room.maxBookingDays) {
            return res.status(400).json({ message: `Booking must be between ${room.minBookingDays} and ${room.maxBookingDays} days` });
        }

        const totalPrice = bookingDays * room.rentPerDay;

        const booking = new Booking({
            room: roomId,
            user: req.user._id,
            startDate,
            endDate,
            totalPrice,
        });

        const createdBooking = await booking.save();
        res.status(201).json(createdBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get bookings by user
const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user._id }).populate('room');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get bookings by room
const getRoomBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ room: req.params.roomId }).populate('user');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export the functions
module.exports = {
    createBooking,
    getUserBookings,
    getRoomBookings,
};
