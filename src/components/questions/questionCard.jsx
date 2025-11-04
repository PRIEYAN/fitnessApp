import React from 'react';
import './questionCard.css';
import PropTypes from 'prop-types';

const QuestionCard = ({ question, answer }) => {
    return (
        <div className="question-card">
            <h3 className="question">{question}</h3>
            <p className="answer">{answer}</p>
        </div>
    );
};

QuestionCard.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
};

export default QuestionCard;