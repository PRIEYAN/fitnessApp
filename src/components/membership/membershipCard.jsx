import React from 'react';
import './membershipCard.css';
import { FaCheck } from 'react-icons/fa';

const MembershipCard = ({ type, color, price, description, features }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                {/* Front of the card */}
                <div className="flip-card-front" style={{ backgroundColor: color }}>
                    <div className="card-content">
                        <h3>{type}</h3>
                        <p>{description}</p>
                        <button className="view-plan">View Plan</button>
                    </div>
                </div>

                {/* Back of the card */}
                <div className="flip-card-back" style={{ backgroundColor: '#fff' }}>
                    <div className="card-content">
                        <div className="price-section">
                            <h3 style={{ color }}>{type}</h3>
                            <div className="price">
                                <span className="currency">$</span>
                                <span className="amount">{price}</span>
                                <span className="period">/month</span>
                            </div>
                        </div>
                        <ul className="features">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <FaCheck className="check-icon" style={{ color }} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="start-plan" style={{ backgroundColor: color }}>
                            Start Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipCard;