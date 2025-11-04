import React from 'react';
import TeamCard from './teamcard';

const Team = () => {
    const teamData = [
        {
            title: "Balance your body, calm your mind, and strengthen your spirit with every yoga session.",
            quote: "Balance your body, calm your mind, and strengthen your spirit with every yoga session.",
            specialist: "Yoga Specialist Team"
        },
        {
            title: "Push your limits and sculpt your chest with every bench press. Strength, power, and results start here.",
            quote: "Balance your body, calm your mind, and strengthen your spirit with every yoga session.",
            specialist: "Specialist Team"
        },
        {
            title: "Lift heavy, grow stronger, and conquer every challenge. Every rep takes you closer to your strongest self.",
            quote: "Balance your body, calm your mind, and strengthen your spirit with every yoga session.",
            specialist: "Specialist Team"
        },{
            title: "Lift heavy, grow stronger, and conquer every challenge. Every rep takes you closer to your strongest self.",
            quote: "Balance your body, calm your mind, and strengthen your spirit with every yoga session.",
            specialist: "Specialist Team"
        }
    ];

    return (
        <section id="team" className="team-section">
            <div className={`team-grid ${teamData.length === 4 ? 'four-cards' : ''}`}>
                {teamData.map((card, index) => (
                    <TeamCard 
                        key={index}
                        title={card.title}
                        quote={card.quote}
                        specialist={card.specialist}
                    />
                ))}
            </div>
        </section>
    );
};

export default Team;