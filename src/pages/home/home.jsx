import React from 'react';
import './home.css';
import Hero from '../../components/hero/hero';
import Equipment from '../../components/equipment/equ';
import Team from '../../components/team/team';
import Membership from '../../components/membership/membership';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Equipment />
            <Team />
            <Membership />
        </div>
    );
}

export default Home;