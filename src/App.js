import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handlePronounceClick = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.volume = volume;
    window.speechSynthesis.speak(utterance);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handlePronounceClick();
    }
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.financingfix.com" className="home-link">Home</a>
        <h1 className="App-title">WPX</h1>
      </header>
      <main>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a word or text"
            value={text}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handlePronounceClick}>Pronounce</button>
        </div>
        <div className="options-container">
          <button onClick={() => document.querySelector('.controls-container').classList.toggle('hidden')}>
            Other Options
          </button>
          <div className="controls-container hidden">
            <label htmlFor="rate">Rate:</label>
            <input
              type="range"
              id="rate"
              name="rate"
              min="0.1"
              max="2"
              step="0.1"
              value={rate}
              onChange={handleRateChange}
            />
            <label htmlFor="volume">Volume:</label>
            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
