import React from 'react';
import '../App.css';
import './Index.css';

function Index() {
  return (
    <div className="video-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Bienvenido a Química Durango</h1>

    </div>
  )
}

export default Index;