// Import necessary modules
import React, { useEffect, useState } from 'react'
import '../styles/OwnerDashboard.css' // Importing CSS file for styling
import api from '../api/api' // Importing API functions
import BookingForm from './BookingForm' // Importing BookingForm component

// Define the OwnerDashboard component
const OwnerDashboard = () => {
    // Define state variables using useState hook
    const [rooms, setRooms] = useState([])

    // Use useEffect hook to fetch rooms data when component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch rooms data from the API
        const fetchRooms = async () => {
            // Make an API request to get rooms data
            const { data } = await api.get('/rooms')
            // Update the rooms state with the fetched data
            setRooms(data)
        }

        // Call the fetchRooms function when the component mounts
        fetchRooms()
    }, []) // Empty dependency array ensures this effect runs only once on mount

    // Render the component JSX
    return (
        <div className="owner-dashboard"> {/* Container div with a class for styling */}
            <h2>Owner Dashboard</h2> {/* Heading */}
            <BookingForm /> {/* Render the BookingForm component */}
        </div>
    )
}

// Export the OwnerDashboard component
export default OwnerDashboard;
