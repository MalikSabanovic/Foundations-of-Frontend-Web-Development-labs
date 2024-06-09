import "./ContactUs.css";
import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (name.trim() === "") {
            validationErrors.name = "Name is required";
        }
        if (email.trim() === "") {
            validationErrors.email = "Email is required";
        }
        if (phoneNumber.trim() === "") {
            validationErrors.phoneNumber = "Phone no. is required";
        }
        if (message.trim() === "") {
            validationErrors.message = "Message is required";
        }
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            
            console.log("Form submitted successfully!");
        }
    };

    return (
        <div className="contactPage">
            <div className="contactForm">
                <h2 className="contactHeading">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <PersonIcon />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {errors.name && <span className="error">{errors.name}</span>}

                    <div className="inputGroup">
                        <EmailIcon />
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {errors.email && <span className="error">{errors.email}</span>}

                    <div className="inputGroup">
                        <PhoneIcon />
                        <input
                            type="text"
                            placeholder="Phone No."
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

                    <div className="inputGroup">
                        <MessageIcon />
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    {errors.message && <span className="error">{errors.message}</span>}

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="sec-section">
                <div className="mapSection">
                    <h2 className="mapHeading">Find Your Volkswagen</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6459.425187158376!2d18.33695933715181!3d43.84864076448498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c97e22a8cc3f%3A0xeab9b8114c5aee65!2sVolkswagen!5e0!3m2!1sen!2sba!4v1717157956103!5m2!1sen!2sba"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;

