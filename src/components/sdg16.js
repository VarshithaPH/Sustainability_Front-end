
import React from 'react';
import './sdg16.css';
import topImage from '../assets/sdg16top.png';
import bottomImage from '../assets/sdg16bot.png'; 
const SDG16 = () => {
    return (
        <div className="sdg16-container">
            <h1>SDG 16: Peace, Justice and Strong Institutions </h1>
            <img src={topImage} alt="SDG 16 Top" className="sdg16-top-image" />
           
            <img src={bottomImage} alt="SDG 16 Bottom" className="sdg16-bottom-image" />
</div>
    );
};

export default SDG16;
