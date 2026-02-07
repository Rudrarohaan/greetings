import React, { useState } from 'react';
import Landing from './components/Landing';
import CategorySelection from './components/CategorySelection';
import NameSelection from './components/NameSelection';
import Envelope from './components/Envelope';
import GratitudeCard from './components/GratitudeCard';
import { gratitudeData } from './data';
import './index.css'; // Ensure proper styles

function App() {
  const [screen, setScreen] = useState('LANDING'); // LANDING, CATEGORIES, NAMES, ENVELOPE, MESSAGE
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleStart = () => {
    setScreen('CATEGORIES');
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'For All') {
      // Direct jump for "For All" -> "Everyone"
      const name = 'Everyone';
      setSelectedName(name);
      setCurrentMessage(gratitudeData['For All']['Everyone']);
      setScreen('ENVELOPE');
    } else {
      setScreen('NAMES');
    }
  };

  const handleSelectName = (name) => {
    setSelectedName(name);
    setCurrentMessage(gratitudeData[selectedCategory][name]);
    setScreen('ENVELOPE');
  };

  const handleEnvelopeOpened = () => {
    // Transition from Envelope animation to full card view
    // A slight delay to let the user enjoy the card sliding out
    setTimeout(() => {
      setScreen('MESSAGE');
    }, 2500);
  };

  const handleBackToLanding = () => {
    setScreen('LANDING');
  };

  const handleBack = () => {
    setScreen('CATEGORIES');
    setSelectedCategory(null);
    setSelectedName(null);
  };

  const handleReadAgain = () => {
    setScreen('ENVELOPE');
  };

  const handleReadAll = () => {
    handleSelectCategory('For All');
  };

  return (
    <div className="app-container">
      {screen === 'LANDING' && <Landing onStart={handleStart} />}

      {screen === 'CATEGORIES' && (
        <CategorySelection
          onSelectCategory={handleSelectCategory}
          onBack={handleBackToLanding}
        />
      )}

      {screen === 'NAMES' && (
        <NameSelection
          category={selectedCategory}
          onSelectName={handleSelectName}
          onBack={handleBack}
        />
      )}

      {screen === 'ENVELOPE' && (
        <div className="container fade-in">
          <Envelope
            recipientName={selectedName}
            category={selectedCategory}
            message={currentMessage}
            onClose={handleEnvelopeOpened}
          />
          {/* Note: Envelope component should call onClose when animation is done/user clicks */}
          {/* Actually my Envelope implementation relies on user clicking. 
               The 'onClose' prop I passed to GratitudeCard inside Envelope needs to trigger the transition.
               Wait, Envelope currently doesn't autocall onClose. 
               The user manually opens envelope. Then sees card. 
               The transition to 'MESSAGE' full screen makes sense if the envelope view is too constrained.
               Or I can just render that state. Let's see.
           */}
        </div>
      )}

      {screen === 'MESSAGE' && (
        <div className="container fade-in">
          <button
            className="back-button-top"
            onClick={handleBack}
          >
            ← Back
          </button>
          <GratitudeCard
            name={selectedName}
            category={selectedCategory}
            message={currentMessage}
            onBack={handleBack}
            onReadAgain={handleReadAgain}
            onReadAll={handleReadAll}
            isEmbedded={false} // Full View
          />
          <div style={{ marginTop: '1rem' }}>
            <button
              onClick={handleReadAgain}
              style={{ fontSize: '0.9rem', color: '#888', textDecoration: 'underline' }}
            >
              Read Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
