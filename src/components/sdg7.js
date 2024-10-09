
import React from 'react';
import './sdg7.css';
import topImage from '../assets/sdg7top.png';
import bottomImage from '../assets/sdg7bot.png'; 
const SDG7 = () => {
    return (
        <div className="sdg7-container">
            <h1>SDG 7: Affordable and Clean Energy  </h1>
            <img src={topImage} alt="SDG 7 Top" className="sdg7-top-image" />
           
            <img src={bottomImage} alt="SDG 7 Bottom" className="sdg7-bottom-image" />
</div>
    );
};

export default SDG7;
