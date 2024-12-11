import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import sdgBg from '../assets/login.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            const userName = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1); // Extract username
            navigate('/resources', { state: { userName } });
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-background">
                <img src={sdgBg} alt="SDG Background" className="background-img" />
            </div>
            <div className="login-content">
                <h1>Welcome Back</h1>
                <p>
                    Login to continue and contribute to a better world. <b>Towards a better world...</b>
                </p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
