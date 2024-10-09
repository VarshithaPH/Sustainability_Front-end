
import React from 'react';
import './sdg3.css'; 
import topImage from '../assets/sdg3top.png';
import bottomImage from '../assets/sdg3bot.png'; 
const SDG3 = () => {
    return (
        <div className="sdg3-container">
            <h1>SDG 3: Health and Well-Being</h1>
            <img src={topImage} alt="SDG 3 Top" className="sdg3-top-image" />
           
            <img src={bottomImage} alt="SDG 3 Bottom" className="sdg3-bottom-image" />
</div>
    );
};

export default SDG3;
