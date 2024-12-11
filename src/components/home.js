import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/image.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS (with Popper)

const Home = () => {
    const navigate = useNavigate();

    const handleSDGClick = (sdg) => {
        navigate(`/sdg${sdg}`);
    };

    return (
        <div className="home-container">
            <header className="header text-center text-white p-4">
                <h1>Sustainable Living Education</h1>
                <p>Join us in our mission to promote sustainable living practices.</p>
            </header>
            <img src={image} alt="Sustainable Living" className="banner-image w-100 mb-4" />
            <div id="sdgCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((sdg, index) => (
                        <div key={sdg} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div
                                className={`sdg-card card p-4 text-center text-white`}
                                style={{ backgroundColor: getSDGColor(sdg), cursor: 'pointer' }}
                                onClick={() => handleSDGClick(sdg)}
                            >
                                <h2>SDG {sdg}</h2>
                                <h3>{getSDGName(sdg)}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#sdgCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#sdgCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

// Function to get SDG name
const getSDGName = (sdg) => {
    const sdgNames = {
        1: "No Poverty",
        2: "Zero Hunger",
        3: "Good Health and Well-being",
        4: "Quality Education",
        5: "Gender Equality",
        6: "Clean Water and Sanitation",
        7: "Affordable and Clean Energy",
        8: "Decent Work and Economic Growth",
        9: "Industry, Innovation and Infrastructure",
        10: "Reduced Inequality",
        11: "Sustainable Cities and Communities",
        12: "Responsible Consumption and Production",
        13: "Climate Action",
        14: "Life Below Water",
        15: "Life on Land",
        16: "Peace, Justice and Strong Institutions",
        17: "Partnerships for the Goals",
    };
    return sdgNames[sdg];
};

// Function to get SDG color
const getSDGColor = (sdg) => {
    const sdgColors = {
        1: "#e5243b", 2: "#e34a33", 3: "#f5a623", 4: "#4caf50", 5: "#9c27b0", 6: "#00bcd4",
        7: "#ffeb3b", 8: "#ff5722", 9: "#2196f3", 10: "#f44336", 11: "#9e9d24", 12: "#3f51b5",
        13: "#607d8b", 14: "#009688", 15: "#8bc34a", 16: "#673ab7", 17: "#607d8b"
    };
    return sdgColors[sdg];
};

export default Home;
