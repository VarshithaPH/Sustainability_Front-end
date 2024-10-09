
import React from 'react';
import './sdg9.css';
import topImage from '../assets/sdg9top.png';
import bottomImage from '../assets/sdg9bot.png'; 
const SDG9 = () => {
    return (
        <div className="sdg9-container">
            <h1>SDG 9: Industry, Innovation and Infrastucture  </h1>
            <img src={topImage} alt="SDG 9 Top" className="sdg9-top-image" />
           
            <img src={bottomImage} alt="SDG 9 Bottom" className="sdg9-bottom-image" />
</div>
    );
};

export default SDG9;
