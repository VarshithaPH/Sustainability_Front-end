
import React from 'react';
import './sdg13.css';
import topImage from '../assets/sdg13top.png';
import bottomImage from '../assets/sdg13bot.png'; 
const SDG13 = () => {
    return (
        <div className="sdg13-container">
            <h1>SDG 13: Climate Action  </h1>
            <img src={topImage} alt="SDG 13 Top" className="sdg13-top-image" />
           
            <img src={bottomImage} alt="SDG 13 Bottom" className="sdg13-bottom-image" />
</div>
    );
};

export default SDG13;
