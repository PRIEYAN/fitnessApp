import React from 'react';
import './hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>TRAIN HARD. STAY<br/>STRONG...</h1>
                <p>Push your limits, break barriers, and transform yourself every single day. 
                Our expert trainers and state-of-the-art equipment are here to guide your journey.</p>
                <button className="join-button">Join Now</button>
            </div>
        </section>
    );
}

export default Hero;