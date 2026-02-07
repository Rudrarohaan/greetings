import React from 'react';

const GratitudeCard = ({ name, category, message, onBack, onReadAll, isEmbedded }) => {
    return (
        <div className={`letter-content ${isEmbedded ? 'embedded' : 'fade-in'}`}>
            <div className="letter-header">
                <h2 className="letter-name">{name}</h2>
                <span className="letter-category">{category}</span>
            </div>

            <div className="letter-body">
                {message}
            </div>

            <div className="letter-footer">
                With gratitude ❤️
            </div>

            {!isEmbedded && (
                <div className="actions" style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                    <button className="back-button" onClick={onBack}>
                        ← Go Back
                    </button>

                    {category !== 'For All' && (
                        <button className="back-button" style={{ color: '#D4AF37' }} onClick={onReadAll}>
                            Read "For All" Message
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default GratitudeCard;
