
import React from 'react';
import './sdg17.css';
import topImage from '../assets/sdg17top.png';
import bottomImage from '../assets/sdg17bot.png'; 
const SDG17 = () => {
    return (
        <div className="sdg17-container">
            <h1>SDG 17: Partnerships for the Goals </h1>
            <img src={topImage} alt="SDG 17 Top" className="sdg17-top-image" />
           
            <img src={bottomImage} alt="SDG 17 Bottom" className="sdg17-bottom-image" />
</div>
    );
};

export default SDG17;
