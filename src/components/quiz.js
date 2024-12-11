import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './quiz.css';

const Quiz = () => {
    const { lessonId } = useParams();
    const navigate = useNavigate();

    // Quiz questions and answers
    const questions = [
        {
            id: 1,
            question: "What does sustainable living mean?",
            options: [
                "Living without modern amenities",
                "Using resources responsibly to ensure future generations can thrive",
                "Avoiding all forms of waste",
                "Growing all your food at home",
            ],
            correctAnswer: 1,
        },
        {
            id: 2,
            question: "Which of the following is a renewable energy source?",
            options: [
                "Coal",
                "Oil",
                "Solar energy",
                "Natural gas",
            ],
            correctAnswer: 2,
        },
        {
            id: 3,
            question: "What is the 3R principle?",
            options: [
                "Reduce, Recycle, Reuse",
                "Resist, Reform, Restore",
                "Recycle, Revive, Reduce",
                "Reduce, Replace, Refuse",
            ],
            correctAnswer: 0,
        },
        {
            id: 4,
            question: "Which of these contributes most to waste reduction?",
            options: [
                "Using single-use plastics",
                "Composting organic waste",
                "Throwing everything in the trash",
                "Burning waste in open areas",
            ],
            correctAnswer: 1,
        },
        {
            id: 5,
            question: "How can individuals help combat climate change?",
            options: [
                "By planting trees",
                "By using public transport",
                "By conserving energy",
                "All of the above",
            ],
            correctAnswer: 3,
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleOptionSelect = (questionId, optionIndex) => {
        setSelectedOptions(prev => ({
            ...prev,
            [questionId]: optionIndex,
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            calculateScore();
            setQuizCompleted(true);
        }
    };

    const calculateScore = () => {
        let finalScore = 0;
        questions.forEach(question => {
            if (selectedOptions[question.id] === question.correctAnswer) {
                finalScore += 20; // Each question is worth 20 points
            }
        });
        setScore(finalScore);
    };

    const handleCertificate = () => {
        if (score >= 80) {
            const userName = prompt("Enter your full legal name for the certificate:");
            if (userName) {
                navigate(`/certificate/${lessonId}`, { state: { userName, score } });
            }
        } else {
            alert("You need at least 80% to earn a certificate. Please try again.");
        }
    };

    return (
        <div className="quiz-container">
            <h1>Lesson {lessonId} Quiz</h1>
            {!quizCompleted ? (
                <div className="question-card">
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    <div className="options">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                className={`option-btn ${
                                    selectedOptions[questions[currentQuestionIndex].id] === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handleOptionSelect(questions[currentQuestionIndex].id, index)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button className="next-btn" onClick={handleNextQuestion}>
                        {currentQuestionIndex === questions.length - 1 ? "Submit Quiz" : "Next Question"}
                    </button>
                </div>
            ) : (
                <div className="result-card">
                    <h2>Your Score: {score}%</h2>
                    {score >= 80 ? (
                        <>
                            <p>Congratulations! You passed the quiz.</p>
                            <button className="certificate-btn" onClick={handleCertificate}>
                                Get Certificate
                            </button>
                        </>
                    ) : (
                        <p>Sorry, you didn’t pass. Try again to earn your certificate.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
