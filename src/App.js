import React, { useState } from 'react';
import './App.css';
import ArtGallery from './components/ArtGallery';

function App() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [artwork, setArtwork] = useState(null);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleGenerateArt = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/generate-art', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setArtwork(data.image);
    } catch (error) {
      console.error('Error generating art:', error);
      alert('Failed to generate art. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h5>AI-Based Virtual Art Gallery</h5>
      <input
        type="text"
        placeholder="Enter prompt for AI art"
        value={prompt}
        onChange={handleInputChange}
      />
      <button onClick={handleGenerateArt} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Art'}
      </button>
      {artwork && <img src={artwork} alt="Generated Art" className="art-image" />}
      <ArtGallery />
    </div>
  );
}

export default App;
