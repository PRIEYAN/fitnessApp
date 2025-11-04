import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './trainerCard.css';

const TrainerCard = ({ name, role, image }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleInfo = () => {
        setIsActive(!isActive);
    };

    return (
        <div 
            className={`trainer-card ${isActive ? 'active' : ''}`}
            onClick={toggleInfo}
            onTouchEnd={(e) => {
                e.preventDefault();
                toggleInfo();
            }}
        >
            <div className="trainer-image">
                <img src={image} alt={name} />
                <div className="trainer-overlay">
                    <div className="trainer-info">
                        <h3>{name}</h3>
                        <p>{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

TrainerCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default TrainerCard;