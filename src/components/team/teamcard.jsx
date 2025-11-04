import React from 'react';
import './teamcard.css';
import teamImg from '../../assets/team.jpg';

const TeamCard = ({ title, quote, specialist }) => {
    return (
        <div className="team-card">
            <div className="team-card-image">
                <img src={teamImg} alt={title} />
            </div>
            <div className="team-card-content">
                <h3>{title}</h3>
                <p className="quote">"{quote}"</p>
                <p className="gray-text">{quote}</p>
                <div className="card-footer">
                    <p className="specialist"><span>{specialist}</span></p>
                    <button className="view-details">View Details 👉</button>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;