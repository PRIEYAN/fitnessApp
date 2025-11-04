import React from 'react';
import './home.css';
import NavBar from '../../components/navbar/navBar';
import Hero from '../../components/hero/hero';
import Equipment from '../../components/equipment/equ';
import Team from '../../components/team/team';
import Membership from '../../components/membership/membership';
import Comment from '../../components/comment/comment';
import Trainer from '../../components/trainers/trainer';
import Question from '../../components/questions/question';
import Mailer from '../../components/mailer/mail';
import Footer from '../../components/footer/footer';    

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <Hero />
            <Equipment />
            <Team />
            <Membership />
            <Comment />
            <Trainer />
            <Question />
            <Mailer />
            <Footer />
        </div>
    );
}

export default Home;