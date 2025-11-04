import React from 'react';
import './commentCard.css';
import { FaStar } from 'react-icons/fa';

const CommentCard = ({ name, image, rating, comment }) => {
    return (
        <div className="comment-card">
            <div className="user-info">
                <img src={image} alt={name} className="user-image" />
                <span className="user-name">{name}</span>
            </div>
            <div className="quote-icon">"</div>
            <div className="rating">
                {[...Array(rating)].map((_, index) => (
                    <FaStar key={index} className="star-icon" />
                ))}
            </div>
            <p className="comment-text">{comment}</p>
            
        </div>
    );
};

export default CommentCard;