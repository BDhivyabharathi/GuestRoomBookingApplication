// Import necessary modules
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/api'

// Define the RegisterPage component
const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('')
    const [isOwner, setIsOwner] = useState(false)
    const history = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.post('/users/register', { name, email, password, mobile, isOwner })
            history('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="card p-4">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="tel" id="mobile" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" id="isOwner" className="form-check-input" checked={isOwner} onChange={(e) => setIsOwner(e.target.checked)} />
                            <label htmlFor="isOwner" className="form-check-label">Register as Owner</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

// Export the RegisterPage component
export default RegisterPage;
