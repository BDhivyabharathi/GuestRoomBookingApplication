// Import necessary modules
import React from 'react'
import OwnerDashboard from '../components/OwnerDashboard'
import RoomList from '../components/RoomList';

// Define the OwnerPage component
////OwnerPage Component: This component displays the owner dashboard with a form for 
//creating new rooms(RoomPage) and a list of existing rooms (RoomList).

const OwnerPage = () => {
    return (
        <div>
            <OwnerDashboard />
            <RoomList/>
        </div>
    )
}

// Export the OwnerPage component
export default OwnerPage;
