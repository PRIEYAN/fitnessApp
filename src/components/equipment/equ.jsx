import React from 'react';
import './equ.css';
import equ1 from '../../assets/equ.png';
import EquCard from './equCard';

const Equipment = () => {
    return (
        <section className="equ-section">
            <div className="equ-header">
                <h2>Our Most Advanced Gym Equipment</h2>
                <p><i>"Train smarter, push harder, and achieve more with our most advanced gym equipment."</i></p>
            </div>
            <div className="equ-grid">
                <EquCard image={equ1} name="Treadmill Pro X" description="Professional grade treadmill with advanced tracking" rating={4.8} price={1999} />
                <EquCard image={equ1} name="Power Rack Elite" description="Commercial grade power rack for serious lifters" rating={4.9} price={2499} />
                <EquCard image={equ1} name="Smart Rower" description="Connected rowing machine with virtual classes" rating={4.7} price={1799} />
                <EquCard image={equ1} name="Adjustable Bench" description="Multi-position bench for versatile workouts" rating={4.6} price={599} />
                <EquCard image={equ1} name="Cable Machine" description="Dual pulley system for full body workouts" rating={4.8} price={2999} />
                <EquCard image={equ1} name="Smart Bike" description="Interactive cycling with live resistance control" rating={4.7} price={1899} />
            </div>
        </section>
    );
}

export default Equipment;