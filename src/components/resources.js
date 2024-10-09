import React from 'react';
import './resources.css';

const Resources = () => {
    const lessons = [
        { id: 1, title: 'Sustainable Living Basics', progress: 60 },
        { id: 2, title: 'Renewable Energy Explained', progress: 80 },
        { id: 3, title: 'Waste Reduction Strategies', progress: 40 },
        { id: 4, title: 'Eco-Friendly Lifestyle Choices', progress: 20 }
    ];

    return (
        <div className="resources-container">
            <h1 className="resources-header">Learning Resources</h1>
            <div className="lesson-grid">
                {lessons.map(lesson => (
                    <div key={lesson.id} className="lesson-card">
                        <h2>{lesson.title}</h2>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${lesson.progress}%` }}
                            ></div>
                        </div>
                        <p>{lesson.progress}% Complete</p>
                        <button className="start-btn">Continue Lesson</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
