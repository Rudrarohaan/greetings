import React from 'react';

const Landing = ({ onStart }) => {
    return (
        <div className="container fade-in landing-bg">
            <div className="floating-words">
                <span className="floating-word" style={{ left: '10%', animationDuration: '25s' }}>gratitude</span>
                <span className="floating-word" style={{ left: '30%', animationDuration: '30s', animationDelay: '5s' }}>learning</span>
                <span className="floating-word" style={{ left: '50%', animationDuration: '22s', animationDelay: '2s' }}>Hindi</span>
                <span className="floating-word" style={{ left: '70%', animationDuration: '28s', animationDelay: '8s' }}>bonding</span>
                <span className="floating-word" style={{ left: '85%', animationDuration: '26s', animationDelay: '12s' }}>games</span>
            </div>

            <h1 className="hero-title">A Message,<br />Written Just for You.</h1>

            <p className="hero-subtitle">
                Aurathon • Extempore • Poetry • Leadership
            </p>

            <button className="cta-button" onClick={onStart}>
                Open Your Message
            </button>
        </div>
    );
};

export default Landing;
