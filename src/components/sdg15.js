
import React from 'react';
import './sdg15.css';
import topImage from '../assets/sdg15top.png';
import bottomImage from '../assets/sdg15bot.png'; 
const SDG15 = () => {
    return (
        <div className="sdg15-container">
            <h1>SDG 15: Life on Land  </h1>
            <img src={topImage} alt="SDG 15 Top" className="sdg15-top-image" />
           
            <img src={bottomImage} alt="SDG 15 Bottom" className="sdg15-bottom-image" />
</div>
    );
};

export default SDG15;
