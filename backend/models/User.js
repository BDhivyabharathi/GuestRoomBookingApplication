// Import mongoose
// mongoose is imported for database operations.
const mongoose = require('mongoose');

// Define the user schema
//A schema for User is defined with fields like name, email, password, mobile, and isOwner. 
//timestamps adds createdAt and updatedAt fields.

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    isOwner: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

// Export the model
// The User model is created from the schema
// and exported for use in other parts of the application.
module.exports = mongoose.model('User', userSchema);
