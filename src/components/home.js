
import React from 'react';
import './home.css'; 
import { useNavigate } from 'react-router-dom';
import image from '../assets/image.png'; 

const Home = () => {
    const navigate = useNavigate();

    const handleSDGClick = (sdg) => {
        navigate(`/sdg${sdg}`);
    };

    return (
        <div className="home-container">
            <header className="header">
                <h1>Sustainable Living Education</h1>
                <p>Join us in our mission to promote sustainable living practices.</p>
            </header>
            <img src={image} alt="Sustainable Living" className="banner-image" />
            <div className="sdg-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((sdg) => (
                    <div
                        key={sdg}
                        className={`sdg-card sdg-${sdg}`}
                        onClick={() => handleSDGClick(sdg)}
                    >
                        <h2>SDG {sdg}</h2>
                        <h3>{getSDGName(sdg)}</h3>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

// Function to get the SDG name
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

export default Home;
