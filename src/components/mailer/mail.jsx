import React, { useState } from 'react';
import './mail.css';

const Mailer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the newsletter subscription
        console.log('Subscribing email:', email);
        setEmail(''); // Clear the input after submission
    };

    return (
        <section className="mail-section">
            <div className="mail-container">
                <h2>Stay Connected with Fit Belive</h2>
                <p>We'd love to hear from you! Whether you have questions about memberships, 
                classes, or your fitness journey, our team is here to help.</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                            type="email" 
                            placeholder="Enter Your Mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="subscribe-btn">
                            Subscribe
                        </button>
                    </div>
                </form>
                
                <p className="subscribe-text">Subscribe to Newsletter</p>
            </div>
        </section>
    );
};

export default Mailer;