import React, { useState, useEffect } from 'react';
import { gratitudeData } from '../data';

const NameSelection = ({ category, onSelectName, onBack }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [names, setNames] = useState([]);

    useEffect(() => {
        if (category && gratitudeData[category]) {
            setNames(Object.keys(gratitudeData[category]));
        }
    }, [category]);

    const filteredNames = names.filter(name =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container fade-in">
            <button
                className="back-button-top"
                onClick={onBack}
            >
                ← Back
            </button>

            <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                Who are you?
            </h2>

            <input
                type="text"
                className="search-bar"
                placeholder="Type your name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="name-grid">
                {filteredNames.length > 0 ? (
                    filteredNames.map((name, index) => (
                        <div
                            key={name}
                            className="name-pill pop-in"
                            style={{ animationDelay: `${index * 50}ms` }}
                            onClick={() => onSelectName(name)}
                            role="button"
                            tabIndex="0"
                        >
                            {name}
                        </div>
                    ))
                ) : (
                    <p>No names found.</p>
                )}
            </div>
        </div>
    );
};

export default NameSelection;
