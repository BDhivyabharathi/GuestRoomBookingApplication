// Import mongoose
const mongoose = require('mongoose');

// Define the booking schema
//The Booking schema includes fields like room (referencing the Room model),
// user (referencing the User model), startDate, endDate, and totalPrice.
const bookingSchema = mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Room',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

// Export the model
//The Booking model is created from the schema and exported.
module.exports = mongoose.model('Booking', bookingSchema);
