import React, { useState } from 'react';
import './App.css';
import ArtGallery from './components/ArtGallery';

function App() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [artwork, setArtwork] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
    setError(null); 
  };

  const handleGenerateArt = async () => {
    if (!prompt.trim()) {
      alert('Please enter a valid prompt!');
      return;
    }

    setLoading(true);
    setError(null); 
    try {
      const response = await fetch('http://localhost:3000/api/generate-art', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (response.ok) {
        setArtwork(data.image);
      } else {
        throw new Error(data.error || 'Failed to generate art');
      }
    } catch (error) {
      console.error('Error generating art:', error);
      setError('Failed to generate art. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>AI-Based Virtual Art Gallery</h1>
      <input
        type="text"
        placeholder="Enter prompt for AI art"
        value={prompt}
        onChange={handleInputChange}
      />
      <button onClick={handleGenerateArt} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Art'}
      </button>

      {error && <p className="error-message">{error}</p>}
      {artwork && <img src={artwork} alt="Generated Art" className="art-image" />}
      <ArtGallery />
    </div>
  );
}

export default App;