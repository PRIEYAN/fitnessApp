import React from 'react';
import './home.css';
import Hero from '../../components/hero/hero';
import Equipment from '../../components/equipment/equ';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Equipment />
        </div>
    );
}

export default Home;