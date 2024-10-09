// src/components/Events.js
import React from 'react';
import './events.css'; // Import the specific CSS file for Events page

const Events = () => {
    return (
        <div className="events-container">
            <h1 className="events-header">Upcoming Sustainability Events</h1>
            
            <div className="event-card sdg1">
                <h2>No Poverty Awareness Drive</h2>
                <p>Date: 12th October 2024</p>
                <p>
                    Join us for an interactive workshop on how to combat poverty in local communities by 
                    building sustainable solutions. Learn how you can contribute to reducing poverty in your own way.
                </p>
            </div>

            <div className="event-card sdg2">
                <h2>Zero Hunger Food Drive</h2>
                <p>Date: 20th October 2024</p>
                <p>
                    Volunteer at the local food drive and help distribute healthy meals to those in need. 
                    Learn about the global fight against hunger and how you can support this crucial cause.
                </p>
            </div>

            <div className="event-card sdg13">
                <h2>Climate Action Summit</h2>
                <p>Date: 28th October 2024</p>
                <p>
                    A full-day summit focused on climate change solutions. Featuring speakers from various 
                    environmental organizations who will share their experiences and innovative solutions to global warming.
                </p>
            </div>

            <div className="event-card sdg4">
                <h2>Quality Education Forum</h2>
                <p>Date: 5th November 2024</p>
                <p>
                    Participate in discussions with educators and policymakers on how to improve access to 
                    quality education in underserved regions. Discover how education is key to achieving sustainable development.
                </p>
            </div>

            <div className="event-card sdg7">
                <h2>Affordable and Clean Energy Expo</h2>
                <p>Date: 15th November 2024</p>
                <p>
                    Explore the latest technologies in renewable energy at this expo, where you can network 
                    with industry experts and learn how to make clean energy more accessible for all.
                </p>
            </div>
        </div>
    );
};

export default Events;
