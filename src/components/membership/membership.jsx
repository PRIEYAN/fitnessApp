import React from 'react';
import './membership.css';
import MembershipCard from './membershipCard';

const Membership = () => {
    const plans = [
        {
            type: "Essential Plan",
            color: "#4CD964", // Green
            price: 39,
            description: "Perfect for newcomers — start your fitness journey with guided workouts and steady progress.",
            features: [
                "Access to Basic Gym Equipment",
                "Free Fitness Assessment & Body Analysis",
                "One-on-One Trainer Guidance",
                "Introductory Yoga & Cardio Sessions",
                "Monthly Progress Tracking",
                "Progress Tracking & Monthly Evaluation"
            ]
        },
        {
            type: "Premium Plan",
            color: "#FFD700", // Gold
            price: 59,
            description: "Perfect for newcomers — start your fitness journey with guided workouts and steady progress.",
            features: [
                "Access to Basic Gym Equipment",
                "Free Fitness Assessment & Body Analysis",
                "One-on-One Trainer Guidance",
                "Introductory Yoga & Cardio Sessions",
                "Monthly Progress Tracking",
                "Progress Tracking & Monthly Evaluation"
            ]
        },
        {
            type: "Elite Plan",
            color: "#A760FF", // Purple
            price: 69,
            description: "Perfect for newcomers — start your fitness journey with guided workouts and steady progress.",
            features: [
                "Access to Basic Gym Equipment",
                "Free Fitness Assessment & Body Analysis",
                "One-on-One Trainer Guidance",
                "Introductory Yoga & Cardio Sessions",
                "Monthly Progress Tracking",
                "Progress Tracking & Monthly Evaluation"
            ]
        }
    ];

    return (
        <section id="membership" className="membership-section">
            <div className="membership-header">
                <h2>Choose Your Membership</h2>
                <p>Flexible Plan To Fit Your Goal Start 14 Days Free Trails</p>
            </div>
            <div className="membership-grid">
                {plans.map((plan, index) => (
                    <MembershipCard 
                        key={index}
                        type={plan.type}
                        color={plan.color}
                        price={plan.price}
                        description={plan.description}
                        features={plan.features}
                    />
                ))}
            </div>
        </section>
    );
};

export default Membership;