
import React from 'react';
import './sdg5.css';
import topImage from '../assets/sdg5top.png';
import bottomImage from '../assets/sdg5bot.png'; 
const SDG5 = () => {
    return (
        <div className="sdg5-container">
            <h1>SDG 5: Gender Equality</h1>
            <img src={topImage} alt="SDG 5 Top" className="sdg5-top-image" />
           
            <img src={bottomImage} alt="SDG 5 Bottom" className="sdg5-bottom-image" />
</div>
    );
};

export default SDG5;
