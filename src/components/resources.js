import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './resources.css';

const Resources = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = location.state?.userName || 'User'; // Default to "User" if no name is provided
    const [videoProgress, setVideoProgress] = useState({});

    const lessons = [
        { id: 1, title: 'Sustainable Living Basics', image: '/path/to/image1.jpg', videoUrl: 'https://www.youtube.com/embed/0Crpab4WWic' },
        { id: 2, title: 'Renewable Energy Explained', image: '/path/to/image2.jpg', videoUrl: 'https://www.youtube.com/embed/E88eXBOEnpI' },
        { id: 3, title: 'Waste Reduction Strategies', image: '/path/to/image3.jpg', videoUrl: 'https://www.youtube.com/embed/xTDW81srvKA' },
        { id: 4, title: 'Eco-Friendly Lifestyle Choices', image: '/path/to/image4.jpg', videoUrl: 'https://www.youtube.com/embed/2Ry3adlJYgg' }
    ];

    const handleTakeQuiz = (lessonId) => {
        if (videoProgress[lessonId] === 100) {
            navigate(`/quiz/${lessonId}`);
        } else {
            alert('Complete the video to unlock the quiz!');
        }
    };

    const onPlayerStateChange = (event, lessonId) => {
        const player = event.target;
        if (event.data === window.YT.PlayerState.PLAYING) {
            const checkProgress = setInterval(() => {
                const currentTime = player.getCurrentTime();
                const duration = player.getDuration();
                const progressPercentage = (currentTime / duration) * 100;

                setVideoProgress(prevState => ({
                    ...prevState,
                    [lessonId]: progressPercentage,
                }));

                // Stop checking progress if the video is completed
                if (progressPercentage >= 100) {
                    clearInterval(checkProgress);
                }
            }, 1000); // Update progress every second
        }
    };

    useEffect(() => {
        window.onYouTubePlayerAPIReady = () => {
            lessons.forEach(lesson => {
                new window.YT.Player(`player-${lesson.id}`, {
                    videoId: lesson.videoUrl.split('/')[4],
                    events: {
                        'onStateChange': (event) => onPlayerStateChange(event, lesson.id),
                    },
                });
            });
        };

        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="resources-container">
            <h1 className="resources-header">Welcome, {userName}!</h1>
            <h2>Learning Resources</h2>
            <div className="lesson-grid">
                {lessons.map(lesson => (
                    <div key={lesson.id} className="lesson-card">
                        {/* Video Embed */}
                        <div className="lesson-video">
                            <div id={`player-${lesson.id}`} className="video-player"></div>
                        </div>

                        <div className="lesson-details">
                            <h2>{lesson.title}</h2>

                            {/* Progress Bar */}
                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    style={{ width: `${videoProgress[lesson.id] || 0}%` }}
                                ></div>
                            </div>
                            <p>{Math.round(videoProgress[lesson.id] || 0)}% Complete</p>

                            {/* Quiz Button */}
                            <button
                                className="take-quiz-btn"
                                onClick={() => handleTakeQuiz(lesson.id)}
                                disabled={(videoProgress[lesson.id] || 0) < 100}
                            >
                                {videoProgress[lesson.id] === 100 ? 'Take Quiz' : 'Complete the Lesson to Unlock'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
