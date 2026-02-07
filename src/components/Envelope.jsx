import React, { useState } from 'react';
import GratitudeCard from './GratitudeCard';

const Envelope = ({ recipientName, category, message, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExtracted, setIsExtracted] = useState(false);

    const handleOpen = () => {
        if (isOpen) return;

        setIsOpen(true);

        // Sequence the extraction after flap opens
        setTimeout(() => {
            setIsExtracted(true);
            setTimeout(() => {
                onClose && onClose();
            }, 3000);
        }, 800); // 0.8s for flap
    };

    return (
        <div className={`container fade-in ${isOpen ? 'dim-bg' : ''}`} style={{ transition: 'background 1s' }}>
            {!isExtracted && (
                <div className="instructions fade-in" style={{
                    position: 'absolute',
                    top: '20%',
                    opacity: isOpen ? 0 : 1,
                    transition: 'opacity 0.5s'
                }}>
                    Tap to Open
                </div>
            )}

            <div
                className={`envelope-container ${isOpen ? 'open' : ''}`}
                onClick={handleOpen}
            >
                <div className="envelope">
                    <div className="envelope-back"></div>

                    <div className="card-wrapper" style={{
                        transform: isExtracted ? 'translateY(-120px) scale(1.1)' : 'translateY(0)',
                        opacity: isOpen ? 1 : 0,
                        zIndex: isExtracted ? 50 : 5,
                        transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s 0.2s',
                    }}>
                        <GratitudeCard
                            name={recipientName}
                            category={category}
                            message={message}
                            onClose={onClose}
                            isEmbedded={true}
                        />
                    </div>

                    <div className="envelope-front"></div>

                    <div className="recipient-name">To: {recipientName}</div>

                    <div className="envelope-flap"></div>
                    <div className="seal">
                        <span style={{ fontSize: '1.5rem' }}>❤️</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Envelope;
