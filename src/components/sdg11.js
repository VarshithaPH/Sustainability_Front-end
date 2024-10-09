
import React from 'react';
import './sdg11.css';
import topImage from '../assets/sdg11top.png';
import bottomImage from '../assets/sdg11bot.png'; 
const SDG11 = () => {
    return (
        <div className="sdg11-container">
            <h1>SDG 11: Sustainable Cities and Communities  </h1>
            <img src={topImage} alt="SDG 11 Top" className="sdg11-top-image" />
           
            <img src={bottomImage} alt="SDG 11 Bottom" className="sdg11-bottom-image" />
</div>
    );
};

export default SDG11;
