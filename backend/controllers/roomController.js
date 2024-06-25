// Import necessary modules
const Room = require('../models/Room');

// Function to create a room
//Create Room: This function handles creating a new room with details provided in the request body.
const createRoom = async (req, res) => {
    const { name, floorSize, numberOfBeds, amenities, minBookingDays, maxBookingDays, rentPerDay, photos } = req.body;

    try {
        const room = new Room({
            name,
            floorSize,
            numberOfBeds,
            amenities,
            minBookingDays,
            maxBookingDays,
            rentPerDay,
            photos,
            owner: req.user._id,
        });

        const createdRoom = await room.save();
        res.status(201).json(createdRoom);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get all rooms
//Get Rooms: This function fetches all rooms, populating the owner information.
const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find().populate('owner', 'name email');
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get room by ID
//Get Room by ID: This function fetches a single room by its ID.
const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id).populate('owner', 'name email');

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to update a room
// Update Room: This function updates room details if the user is authorized.
const updateRoom = async (req, res) => {
    const { name, floorSize, numberOfBeds, amenities, minBookingDays, maxBookingDays, rentPerDay, photos } = req.body;

    try {
        const room = await Room.findById(req.params.id);

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        if (room.owner.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        room.name = name || room.name;
        room.floorSize = floorSize || room.floorSize;
        room.numberOfBeds = numberOfBeds || room.numberOfBeds;
        room.amenities = amenities || room.amenities;
        room.minBookingDays = minBookingDays || room.minBookingDays;
        room.maxBookingDays = maxBookingDays || room.maxBookingDays;
        room.rentPerDay = rentPerDay || room.rentPerDay;
        room.photos = photos || room.photos;

        const updatedRoom = await room.save();
        res.json(updatedRoom);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to delete a room
// Delete Room: This function deletes a room if the user is authorized.
const deleteRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        if (room.owner.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await room.remove();
        res.json({ message: 'Room removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export the functions
module.exports = {
    createRoom,
    getRooms,
    getRoomById,
    updateRoom,
    deleteRoom,
};
