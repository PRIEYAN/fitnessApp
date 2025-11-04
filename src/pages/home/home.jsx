import React from 'react';
import './home.css';
import Hero from '../../components/hero/hero';
import Equipment from '../../components/equipment/equ';
import Team from '../../components/team/team';
import Membership from '../../components/membership/membership';
import Comment from '../../components/comment/comment';
import Trainer from '../../components/trainers/trainer';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Equipment />
            <Membership />
            <Team />
            <Comment />
            <Trainer />
        </div>
    );
}

export default Home;