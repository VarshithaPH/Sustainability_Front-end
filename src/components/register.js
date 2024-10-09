import React from 'react';
import './register.css';

const Register = () => {
    return (
        <div className="register-page">
            <div className="register-content">
                <h1>Create an Account</h1>
                <p>Join us to contribute to a better world. <b>#Towards a better world...</b></p>
                <form className="register-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your full name" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm your password" required />
                    </div>
                    <button type="submit" className="submit-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
