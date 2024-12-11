import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Show popup and redirect to login
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            navigate('/login');
        }, 3000);
    };

    return (
        <div className="register-page">
            <div className="register-content">
                <h1>Create an Account</h1>
                <p>
                    Join us to contribute to a better world. <b>#Towards a better world...</b>
                </p>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Register
                    </button>
                </form>
            </div>

            {showPopup && (
                <div className="popup">
                    <h2>Welcome, {formData.name}!</h2>
                    <p>Your account has been created successfully. Redirecting to login...</p>
                </div>
            )}
        </div>
    );
};

export default Register;
