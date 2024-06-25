// Import necessary modules
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/RoomDetails.css'
import axios from 'axios'

// Define the RoomDetails component
const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState([])

    useEffect(() => {
        const fetchRoom = async () => {
            await axios.get(`http://localhost:3003/room`).then(res=>setRoom(res.data)).catch(err=>alert('data not retrived'))
            
        }

        fetchRoom()
    }, [id])

    return (
        <div>
           {room.map(room=>(
            <div >
                 <img src={room.photos ? room.photos[0] : ''} alt={room.name} />
                 <h2>{room.name}</h2>
                 <p>{room.floorSize}</p>
                 <p>{room.numberOfBeds} Beds</p>
                 <p>Amenities: {room.amenities ? room.amenities.join(', ') : ''}</p>
                 <p>Rent per Day: {room.rentPerDay}</p>
                 <p>Min Booking Days: {room.minBookingDays}</p>
                 <p>Max Booking Days: {room.maxBookingDays}</p>
                 <p>Owner: {room.owner ? room.owner.name : ''}</p>
                 </div>
           ))}
        </div>
    )
}

// Export the RoomDetails component
export default RoomDetails;
