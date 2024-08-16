import React, { useRef, useEffect, useState } from 'react';
import QrScanner from 'qr-scanner';

const QRCodeScanner = () => {
    const videoRef = useRef(null);
    const [scanResult, setScanResult] = useState('No result');

    useEffect(() => {
        const qrScanner = new QrScanner(
            videoRef.current,
            (result) => setScanResult(result),
            {
                onDecodeError: (error) => {
                    console.error(error);
                },
            }
        );
        qrScanner.start();
        return () => qrScanner.stop();
    }, []);

    return (
        <div>
            <h2>Scan QR Code</h2>
            <video ref={videoRef} style={{ width: '100%' }} />
            <p>Scanned Result: {scanResult}</p>
        </div>
    );
};

export default QRCodeScanner;
