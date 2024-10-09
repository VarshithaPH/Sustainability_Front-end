
import React from 'react';
import './about.css'; 
import topImage from '../assets/About Us.png';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <img src={topImage} alt="About Us" className="about-image" />
            <div className="about-content">
                <p>
                    We are a team of three passionate individuals in our pre-final year at KL University. 
                    Our mission is to raise awareness about sustainable living practices through this platform, 
                    encouraging environmentally responsible behavior and educating students about how they can 
                    make a difference in their daily lives.
                </p>
                <p>
                    With a shared vision for a greener planet, we have combined our skills in web development, 
                    design, and content creation to bring this project to life. We believe that small changes 
                    can lead to a big impact, and we are excited to guide others on this journey toward a more 
                    sustainable future.
                </p>
            </div>
        </div>
    );
};

export default About;
