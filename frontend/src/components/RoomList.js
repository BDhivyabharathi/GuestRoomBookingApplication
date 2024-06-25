// Import necessary modules
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/RoomList.css'

// Define the RoomList component
const RoomList = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch('/rooms.json')
                if (!response.ok) {
                    throw new Error('Failed to fetch rooms')
                }
                const data = await response.json()
                setRooms(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchRooms()
    }, [])

    if (loading) return <div className="loading">Loading rooms...</div>
    if (error) return <div className="error">{error}</div>

    return (
        <div className="room-list">
            {rooms.map(room => (
                <div key={room._id} className="room-card">
                    <img src={room.photos[0]} alt={room.name} className="room-image" />
                    <h3>{room.name}</h3>
                    <p>Floor Size: {room.floorSize}</p>
                    <p>{room.numberOfBeds} {room.numberOfBeds > 1 ? 'Beds' : 'Bed'}</p>
                    <Link to={`/room/${room._id}`} className="details-link">View Details</Link>
                </div>
            ))}
        </div>
    )
}

// Export the RoomList component
export default RoomList;