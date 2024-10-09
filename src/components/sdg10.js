
import React from 'react';
import './sdg10.css';
import topImage from '../assets/sdg10top.png';
import bottomImage from '../assets/sdg10bot.png'; 
const SDG10 = () => {
    return (
        <div className="sdg10-container">
            <h1>SDG 10: Reduced Inequality  </h1>
            <img src={topImage} alt="SDG 10 Top" className="sdg10-top-image" />
           
            <img src={bottomImage} alt="SDG 10 Bottom" className="sdg10-bottom-image" />
</div>
    );
};

export default SDG10;
