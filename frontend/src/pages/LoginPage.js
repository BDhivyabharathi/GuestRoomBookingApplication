// Import necessary modules
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import api from '../api/api'
import axios from 'axios'

// Define the LoginPage component
const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isOwner, setIsOwner] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:3000/api/users/login', { email, password,isOwner })
            if(isOwner===true){
                navigate('/owner')
            }
            else{
                navigate('/room')
            }
           
        } catch (error) {
            alert('Login failed')
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="card p-4">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" id="isOwner" className="form-check-input" checked={isOwner} onChange={(e) => setIsOwner(e.target.checked)} />
                            <label htmlFor="isOwner" className="form-check-label">Login as Owner</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

// Export the LoginPage component
export default LoginPage;
