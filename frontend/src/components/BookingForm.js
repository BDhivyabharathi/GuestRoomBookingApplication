// Import necessary modules
import React, { useState } from 'react'
import '../styles/BookingForm.css'
import api from '../api/api'

// Define the BookingForm component
//BookingForm Component: This component provides a form for booking a room.
// It captures the start and end dates, submits the booking request to the backend, 
//and displays a confirmation alert with the total price.
const BookingForm = () => {
    const [roomId, setRoomId] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await api.post('/bookings', { roomId, startDate, endDate });
            alert('Booking successful');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="roomId">Room ID</label>
                <input type="text" id="roomId" value={roomId} onChange={(e) => setRoomId(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Book</button>
        </form>
    )
}

// Export the BookingForm component
export default BookingForm;
