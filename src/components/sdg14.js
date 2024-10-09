
import React from 'react';
import './sdg14.css';
import topImage from '../assets/sdg14top.png';
import bottomImage from '../assets/sdg14bot.png'; 
const SDG14 = () => {
    return (
        <div className="sdg14-container">
            <h1>SDG 14: Life Below Water  </h1>
            <img src={topImage} alt="SDG 14 Top" className="sdg14-top-image" />
           
            <img src={bottomImage} alt="SDG 14 Bottom" className="sdg14-bottom-image" />
</div>
    );
};

export default SDG14;
