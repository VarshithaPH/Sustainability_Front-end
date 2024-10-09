
import React from 'react';
import './sdg8.css';
import topImage from '../assets/sdg8top.png';
import bottomImage from '../assets/sdg8bot.png'; 
const SDG8 = () => {
    return (
        <div className="sdg8-container">
            <h1>SDG 8: Decent Word and Economic Growth  </h1>
            <img src={topImage} alt="SDG 8 Top" className="sdg8-top-image" />
           
            <img src={bottomImage} alt="SDG 8 Bottom" className="sdg8-bottom-image" />
</div>
    );
};

export default SDG8;
