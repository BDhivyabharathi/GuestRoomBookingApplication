// Import necessary modules
import React from 'react'
import RoomDetails from '../components/RoomDetails'
import BookingForm from '../components/BookingForm'

// Define the RoomPage component
//RoomPage Component: This component fetches and displays the details of a single room 
//based on the room ID from the URL parameters. 
//It also renders the BookingForm component for booking the room.

const RoomPage = () => {
    return (
        <div>
            <RoomDetails />
            {/* <BookingForm /> */}
        </div>
    )
}

// Export the RoomPage component
export default RoomPage;
