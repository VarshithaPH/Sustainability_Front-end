
import React from 'react';
import './sdg12.css';
import topImage from '../assets/sdg12top.png';
import bottomImage from '../assets/sdg12bot.png'; 
const SDG12 = () => {
    return (
        <div className="sdg12-container">
            <h1>SDG 12: Responsible Consumption and Production  </h1>
            <img src={topImage} alt="SDG 12 Top" className="sdg12-top-image" />
           
            <img src={bottomImage} alt="SDG 12 Bottom" className="sdg12-bottom-image" />
</div>
    );
};

export default SDG12;
