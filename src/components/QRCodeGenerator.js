import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
    const [text, setText] = useState('');

    return (
        <div>
            <h2>Generate QR Code</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to encode"
            />
            <div style={{ background: 'white', padding: '16px', marginTop: '16px' }}>
                <QRCode value={text} size={256} />
            </div>
        </div>
    );
};

export default QRCodeGenerator;
