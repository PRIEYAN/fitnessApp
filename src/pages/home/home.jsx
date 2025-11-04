import React from 'react';
import './home.css';
import Hero from '../../components/hero/hero';
import Equipment from '../../components/equipment/equ';
import Team from '../../components/team/team';
import Membership from '../../components/membership/membership';
import Comment from '../../components/comment/comment';
import Trainer from '../../components/trainers/trainer';
import Question from '../../components/questions/question';
import Mailer from '../../components/mailer/mail';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Equipment />
            <Team />
            <Membership />
            <Comment />
            <Trainer />
            <Question />
            <Mailer />
        </div>
    );
}

export default Home;