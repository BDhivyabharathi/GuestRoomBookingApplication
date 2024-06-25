// Import mongoose
const mongoose = require("mongoose");

// Function to connect to the database
const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/guest-room-booking")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

// Export the function
module.exports = connectDB;
