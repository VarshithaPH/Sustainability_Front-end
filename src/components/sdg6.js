
import React from 'react';
import './sdg6.css';
import topImage from '../assets/sdg6top.png';
import bottomImage from '../assets/sdg6bot.png'; 
const SDG6 = () => {
    return (
        <div className="sdg6-container">
            <h1>SDG 6: Clean Water and Sanitation </h1>
            <img src={topImage} alt="SDG 6 Top" className="sdg6-top-image" />
           
            <img src={bottomImage} alt="SDG 6 Bottom" className="sdg6-bottom-image" />
</div>
    );
};

export default SDG6;
