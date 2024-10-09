
import React from 'react';
import './sdg1.css'; 
import topImage from '../assets/sdg1top.png';
import bottomImage from '../assets/sdg1bot.png'; 

const SDG1 = () => {
    return (
        <div className="sdg1-container">
            <h1>SDG 1: No Poverty</h1>
            <img src={topImage} alt="SDG 1 Top" className="sdg1-top-image" />
           
            <img src={bottomImage} alt="SDG 1 Bottom" className="sdg1-bottom-image" />
        </div>
    );
};

export default SDG1;
