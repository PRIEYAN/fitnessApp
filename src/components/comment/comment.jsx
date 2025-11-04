import React from 'react';
import './comment.css';
import CommentCard from './commentCard';
import commentProfile from '../../assets/commentProfile.jpg';

const Comment = () => {
    const comments = [
        {
            name: "Nora",
            image: commentProfile,
            rating: 4,
            comment: "The best gym experience I've ever had — friendly trainers and top-notch equipment! The best gym experience I've ever had — friendly trainers and top-notch equipment!"
        },
        {
            name: "Hinata",
            image: commentProfile,
            rating: 4,
            comment: "The best gym experience I've ever had — friendly trainers and top-notch equipment! The best gym experience I've ever had — friendly trainers and top-notch equipment!"
        },
        {
            name: "Nic",
            image: commentProfile,
            rating: 4,
            comment: "The best gym experience I've ever had — friendly trainers and top-notch equipment! The best gym experience I've ever had — friendly trainers and top-notch equipment!"
        },
        {
            name: "Eren",
            image: commentProfile,
            rating: 4,
            comment: "The best gym experience I've ever had — friendly trainers and top-notch equipment! The best gym experience I've ever had — friendly trainers and top-notch equipment!"
        }
    ];

    return (
        <section id="comments" className="comment-section">
            <div className="comment-header">
                <h2>What Our Members Says</h2>
                <p>From beginners to pros, everyone finds motivation, support, and real transformation here.</p>
            </div>
            <div className="comment-grid">
                {comments.map((comment, index) => (
                    <CommentCard
                        key={index}
                        name={comment.name}
                        image={comment.image}
                        rating={comment.rating}
                        comment={comment.comment}
                    />
                ))}
            </div>
        </section>
    );
};

export default Comment;