//import necessary modules
const dotenv = require('dotenv');
//Using Express
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const mongoose = require('mongoose');
var cors=require('cors')

//load environment variables
dotenv.config();

//to connect with the database
connectDB(); 

//create an instance of express for this app - Initializing express app
const app = express();
app.use(cors())

//middleware to parse json
app.use(express.json());

// Routes for handling different functionalities
app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Server Error' });
});

//Start the server
const PORT = process.env.PORT || 3000;
//using callback function to know the server status - server started or not
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})