import React from 'react';
import PropTypes from 'prop-types';
import './trainer.css';
import TrainerCard from './trainerCard';
import trainerImg from '../../assets/trainer.jpg';

const Trainer = () => {
    const trainers = [
        {
            name: "Prieyan",
            role: "Senior Yoga Trainer",
            image: trainerImg
        },
        {
            name: "Sarah",
            role: "Fitness Expert",
            image: trainerImg
        },
        {
            name: "Mike",
            role: "CrossFit Specialist",
            image: trainerImg
        },
        {
            name: "Emma",
            role: "Nutrition Coach",
            image: trainerImg
        }
    ];

    return (
        <section id="trainers" className="trainer-section">
            <div className="trainer-header">
                <h2>Our Gym Top Trainers</h2>
                <p>Our certified trainers are here to guide, motivate, and transform your fitness journey.</p>
            </div>
            <div className="trainer-grid">
                {trainers.map((trainer, index) => (
                    <TrainerCard
                        key={index}
                        name={trainer.name}
                        role={trainer.role}
                        image={trainer.image}
                    />
                ))}
            </div>
        </section>
    );
};

TrainerCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Trainer;