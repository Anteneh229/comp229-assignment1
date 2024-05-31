/*
  File:contact.jsx
  Name:Anteneh Guta
  Student ID:301134828
  Date : 29/05/2024
*/

import { useState } from 'react';
import './contact.css';

export default function ContactPage() {
        const [formData, setFormData] = useState({
        firstName: 'Anteneh',
        lastName: 'Guta',
        contactNumber: '6479161655',
        email: 'aguta@my.centennialcollege.ca',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Redirect 
    };

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                <label>Contact Number:</label>
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
