import React from 'react';
import './login.css';
import sdgBg from '../assets/login.png';

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-background">
                <img src={sdgBg} alt="SDG Background" className="background-img" />
            </div>
            <div className="login-content">
                <h1>Welcome Back</h1>
                <p>Login to continue and contribute to a better world. <b>Towards a better world...</b></p>
                <form className="login-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
