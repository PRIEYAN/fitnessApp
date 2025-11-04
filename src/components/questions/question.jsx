import React from 'react';
import './question.css';
import QuestionCard from './questionCard';

const Question = () => {
    const questions = [
        {
            question: "Do you offer beginner-friendly programs?",
            answer: "Yes! We have personalized Beginner Plans with trainer guidance to help you start your fitness journey safely."
        },
        {
            question: "Is a personal trainer available?",
            answer: "Absolutely. Our certified trainers provide one-on-one coaching, workout plans, and nutrition guidance."
        },
        {
            question: "What types of memberships do you offer?",
            answer: "We offer Essential, Premium, and Elite membership plans to suit every fitness level and goal."
        },
        {
            question: "How can I sign up?",
            answer: "You can register online through our website or visit us in person to choose a plan and start your fitness journey."
        }
    ];

    return (
        <section id="questions" className="question-section">
            <div className="question-header">
                <h2>Frequently Asked Question</h2>
            </div>
            <div className="questions-container">
                {questions.map((item, index) => (
                    <QuestionCard
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </section>
    );
};

export default Question;