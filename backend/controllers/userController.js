// Import necessary modules
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Function to register a user

//Register User: This function handles user registration.
// It checks for an existing user, hashes the password, saves the user,
// and generates a JWT token.
const registerUser = async (req, res) => {
    const { name, email, password, mobile, isOwner } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            mobile,
            isOwner,
        });

        // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        //     expiresIn: '1d',
        // });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            isOwner: user.isOwner,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to login a user
//Login User: This function handles user login.
// It verifies the user's credentials and generates a JWT token.
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        //     expiresIn: '1d',
        // });

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            isOwner: user.isOwner,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export the functions
module.exports = {
    registerUser,
    loginUser,
};
