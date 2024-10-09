
import React from 'react';
import './sdg2.css'; 
import topImage from '../assets/sdg2top.png'; 
import bottomImage from '../assets/sdg2bot.png'; 
const SDG2 = () => {
    return (
        <div className="sdg2-container">
            <h1>SDG 2: Zero Hunger</h1>
            <img src={topImage} alt="SDG 2 Top" className="sdg2-top-image" />
           
            <img src={bottomImage} alt="SDG 2 Bottom" className="sdg2-bottom-image" />
</div>
    );
};

export default SDG2;
