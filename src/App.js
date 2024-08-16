import React from 'react';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRCodeScanner from './components/QRCodeScanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>QR Code Generator and Scanner</h1>
      <div className="qr-code-section">
        <QRCodeGenerator />
      </div>
      <div className="qr-code-section">
        <QRCodeScanner />
      </div>
    </div>
  );
}

export default App;
