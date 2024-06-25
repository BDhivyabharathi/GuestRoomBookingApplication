import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/ContactUsPage.css'

const ContactUsPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };


    return (
        <>
            <div className='c-img'>
                <h1>Contact Us</h1>
                <h4>Feel free to reach out to us for any inquiries or assistance.</h4>
                <Link to="/" className="btn btn-primary">Go Back to Home</Link>
            </div>

            <div className="contact-page">
                <h1>For more details</h1>
                <p>LVDB PARADISE</p>
                <i>+0(490)098768 </i>
                <p>150th Floor, Burj Khalifa, Dubai, United Arab Emirates.</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {submitted && <p>Thank you for contacting us! We will get back to you soon.</p>}
            </div>


        </>
    );
};

export default ContactUsPage;