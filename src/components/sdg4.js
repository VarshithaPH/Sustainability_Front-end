
import React from 'react';
import './sdg4.css';
import topImage from '../assets/sdg4top.png';
import bottomImage from '../assets/sdg4bot.png'; 
const SDG4 = () => {
    return (
        <div className="sdg4-container">
            <h1>SDG 4: Quality Education</h1>
            <img src={topImage} alt="SDG 4 Top" className="sdg4-top-image" />
           
            <img src={bottomImage} alt="SDG 4 Bottom" className="sdg4-bottom-image" />
</div>
    );
};

export default SDG4;
