import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './about.css'; // Optional for minor custom styles
import topImage from '../assets/About Us.png';

const About = () => {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1 className="display-4 text-primary fw-bold">About Us</h1>
                <img 
                    src={topImage} 
                    alt="About Us" 
                    className="img-fluid rounded shadow-sm my-3" 
                    style={{ maxHeight: '400px' }} 
                />
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-lg">
                        <div className="card-body">
                            <p className="card-text fs-5 text-muted mb-4">
                                We are a team of three passionate individuals in our pre-final year at KL University. 
                                Our mission is to raise awareness about sustainable living practices through this platform, 
                                encouraging environmentally responsible behavior and educating students about how they can 
                                make a difference in their daily lives.
                            </p>
                            <p className="card-text fs-5 text-muted">
                                With a shared vision for a greener planet, we have combined our skills in web development, 
                                design, and content creation to bring this project to life. We believe that small changes 
                                can lead to a big impact, and we are excited to guide others on this journey toward a more 
                                sustainable future.
                            </p>
                            <div className="text-center mt-4">
                                <button className="btn btn-success btn-lg px-4 py-2 shadow">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
