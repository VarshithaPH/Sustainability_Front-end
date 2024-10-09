import React from 'react';
import './contact.css'; 

 

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1>Contact Us</h1>
                <p>
                    Have any questions or want to get involved? Feel free to reach out to us by filling out the form below.
                </p>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="6" placeholder="Your Message"></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
