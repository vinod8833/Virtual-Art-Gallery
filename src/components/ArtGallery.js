import React, { useState } from 'react';
import 'aframe';

const ArtGallery = () => {
  const [currentScene, setCurrentScene] = useState('gallery');

  const handleGameChange = (game) => {
    setCurrentScene(game);
  };

  const renderScene = () => {
    switch (currentScene) {
      case 'game1':
        return (
            <a-scene>
  <a-sky color="#87CEEB"></a-sky>

  <a-light type="ambient" color="#ffffff" intensity="0.8"></a-light>
  <a-light type="directional" color="#ffffff" intensity="1" position="2 4 -3"></a-light>

  <a-plane 
    position="0 0 -4" 
    rotation="-90 0 0" 
    width="20" 
    height="20" 
    color="#228B22"
  ></a-plane>

  <a-sphere 
    position="0 2.5 -3" 
    radius="0.3" 
    color="#FFDAB9"
  ></a-sphere>

  <a-cylinder 
    position="0 1.8 -3" 
    radius="0.25" 
    height="1.2" 
    color="#1E90FF"
  ></a-cylinder>

  <a-cylinder 
    position="-0.5 2.1 -3" 
    radius="0.1" 
    height="0.8" 
    rotation="0 0 30" 
    color="#FFDAB9"
  ></a-cylinder>

  <a-cylinder 
    position="0.5 2.1 -3" 
    radius="0.1" 
    height="0.8" 
    rotation="0 0 -30" 
    color="#FFDAB9"
  ></a-cylinder>

  <a-cylinder 
    position="-0.15 0.6 -3" 
    radius="0.1" 
    height="1" 
    color="#1E90FF"
  ></a-cylinder>

  <a-cylinder 
    position="0.15 0.6 -3" 
    radius="0.1" 
    height="1" 
    color="#1E90FF"
  ></a-cylinder>

  <a-camera position="0 1.6 0">
    <a-cursor color="#FF0000"></a-cursor>
  </a-camera>
</a-scene>

          
        );
      case 'game2':
        return (
            <a-scene>
            <a-sky color="#87CEEB"></a-sky>
            <a-light type="ambient" color="#ffffff" intensity="0.5"></a-light>
            <a-light type="directional" color="#ffffff" intensity="1" position="2 4 -3"></a-light>

            <a-plane 
              position="0 0 -4" 
              rotation="-90 0 0" 
              width="10" 
              height="10" 
              src="https://cdn.aframe.io/a-painter/images/floor.jpg"
              repeat="10 10"
            ></a-plane>

            <a-box position="-2 0.5 -4" rotation="0 45 0" color="#FF6347"></a-box>
            <a-sphere position="0 1.25 -5" radius="1.25" color="#1E90FF"></a-sphere>
            <a-cylinder position="2 0.75 -4" radius="0.5" height="1.5" color="#32CD32"></a-cylinder>
            <a-camera position="0 1.6 0">
              <a-cursor color="#FF0000"></a-cursor>
            </a-camera>
          </a-scene>
        );
      case 'game3':
        return (
            <a-scene>
            <a-sky color="#98FB98"></a-sky>
            <a-light type="ambient" color="#ffffff" intensity="0.5"></a-light>
            <a-box 
              position="0 0.5 -4" 
              color="#8A2BE2" 
              animation="property: position; to: 3 0.5 -4; dir: alternate; loop: true; dur: 2000"
            ></a-box>
            <a-box 
              position="0 -0.5 -6" 
              color="#32CD32" 
              animation="property: position; to: -3 -0.5 -6; dir: alternate; loop: true; dur: 2500"
            ></a-box>
            <a-camera position="0 1.6 0">
              <a-cursor color="#FF0000"></a-cursor>
            </a-camera>
          </a-scene>
        );
      case 'game4':
        return (
            <a-scene>
            <a-sky color="#87CEEB"></a-sky>
            <a-light type="ambient" color="#ffffff" intensity="0.5"></a-light>
            <a-box 
              position="0 1 -3" 
              color="#FF6347" 
              rotation="0 45 0" 
              animation="property: rotation; to: 0 1440 0; loop: true; dur: 1000"
            ></a-box>
            <a-camera position="0 1.6 0">
              <a-cursor color="#FF0000"></a-cursor>
            </a-camera>
          </a-scene>
        );
      case 'game5':
        return (
            <a-scene>
  <a-sky color="#87CEEB"></a-sky>

  <a-light type="ambient" color="#ffffff" intensity="0.8"></a-light>
  <a-light type="directional" color="#ffffff" intensity="1" position="2 4 -3"></a-light>

  <a-plane 
    position="0 0 -4" 
    rotation="-90 0 0" 
    width="20" 
    height="20" 
    color="#228B22"
  ></a-plane>

  <a-box 
    position="0 1 -3" 
    width="1.2" 
    height="0.6" 
    depth="0.4" 
    color="#8B4513"
  ></a-box>

  <a-box 
    position="0.7 1.2 -3" 
    width="0.5" 
    height="0.5" 
    depth="0.4" 
    color="#8B4513"
  ></a-box>

  <a-cylinder 
    position="-0.7 1.1 -3" 
    radius="0.05" 
    height="0.5" 
    rotation="0 0 45" 
    color="#8B4513"
  ></a-cylinder>

  <a-box 
    position="0.9 1.5 -3" 
    width="0.1" 
    height="0.3" 
    depth="0.1" 
    color="#8B4513"
  ></a-box>
  <a-box 
    position="0.5 1.5 -3" 
    width="0.1" 
    height="0.3" 
    depth="0.1" 
    color="#8B4513"
  ></a-box>

  <a-cylinder 
    position="0.4 0.6 -3.2" 
    radius="0.1" 
    height="0.6" 
    color="#8B4513"
  ></a-cylinder>
  <a-cylinder 
    position="-0.4 0.6 -3.2" 
    radius="0.1" 
    height="0.6" 
    color="#8B4513"
  ></a-cylinder>
  <a-cylinder 
    position="0.4 0.6 -2.8" 
    radius="0.1" 
    height="0.6" 
    color="#8B4513"
  ></a-cylinder>
  <a-cylinder 
    position="-0.4 0.6 -2.8" 
    radius="0.1" 
    height="0.6" 
    color="#8B4513"
  ></a-cylinder>

  <a-sphere 
    position="1 1.2 -3" 
    radius="0.1" 
    color="#000000"
  ></a-sphere>

  <a-sphere 
    position="0.8 1.3 -2.8" 
    radius="0.05" 
    color="#000000"
  ></a-sphere>
  <a-sphere 
    position="0.6 1.3 -2.8" 
    radius="0.05" 
    color="#000000"
  ></a-sphere>

  <a-camera position="0 1.6 0">
    <a-cursor color="#FF0000"></a-cursor>
  </a-camera>
</a-scene>

        );
        
      default:
        return null;
    }
  };

  return (
    <div>
      <h6>Virtual Art Gallery with Interactive Games</h6>
      <div>
        <button onClick={() => handleGameChange('gallery')}>Art Gallery</button>
        <button onClick={() => handleGameChange('game1')}>Game 1: SphereMan</button>
        <button onClick={() => handleGameChange('game2')}>Game 2: Shapescape</button>
        <button onClick={() => handleGameChange('game3')}>Game 3: BoxRun</button>
        <button onClick={() => handleGameChange('game4')}>Game 4: Spinning Cube</button>
        <button onClick={() => handleGameChange('game5')}>Game 5: Charlie</button>
      </div>
      {renderScene()}




      <footer style={{

}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <p style={{ fontSize: '1rem', marginBottom: '1px' }}>&copy; 2025 KVK Designs. All rights reserved.</p>
  </div>
  <div style={{
  }}>

  </div>
</footer>

    </div>
  );
};

export default ArtGallery;
