import React from 'react';
import { gratitudeData } from '../data';

const CategorySelection = ({ onSelectCategory, onBack }) => {
    const categories = Object.keys(gratitudeData);

    return (
        <div className="container fade-in">
            <button
                className="back-button-top"
                onClick={onBack}
            >
                ← Back
            </button>
            <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                Select a Category
            </h2>

            <div className="category-grid">
                {categories.map((category, index) => (
                    <div
                        key={category}
                        className="category-card slide-up"
                        style={{ animationDelay: `${index * 150}ms` }}
                        onClick={() => onSelectCategory(category)}
                    >
                        <h3 className="category-title">{category}</h3>
                        {/* Optional subtle subtitle or icon here if needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySelection;
