// Import mongoose
const mongoose = require('mongoose');

// Define the room schema
// The Room schema includes fields like owner (referencing the User model),
// name, floorSize, numberOfBeds, amenities, minBookingDays, maxBookingDays,
// rentPerDay, and photos.
const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    floorSize: {
        type: String,
        required: true,
    },
    numberOfBeds: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    minBookingDays: {
        type: Number,
        required: true,
    },
    maxBookingDays: {
        type: Number,
        required: true,
    },
    rentPerDay: {
        type: Number,
        required: true,
    },
    photos: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
});

// Export the model
//The Room model is created from the schema and exported
module.exports = mongoose.model('Room', roomSchema);
