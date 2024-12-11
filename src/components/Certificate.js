import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './certificate.css';

const Certificate = () => {
    const location = useLocation();
    const { userName, score } = location.state || {}; // Retrieve userName and score from state
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Background styling
        ctx.fillStyle = "#f5f5f5";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Border
        ctx.strokeStyle = "#2a3d66";
        ctx.lineWidth = 10;
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

        // Certificate Title
        ctx.font = "36px Arial, sans-serif";
        ctx.fillStyle = "#2a3d66";
        ctx.textAlign = "center";
        ctx.fillText("Certificate of Achievement", canvas.width / 2, 100);

        // Subtitle
        ctx.font = "24px Arial, sans-serif";
        ctx.fillStyle = "#555";
        ctx.fillText("This is to certify that", canvas.width / 2, 150);

        // User Name
        ctx.font = "32px Arial, sans-serif";
        ctx.fillStyle = "#000";
        ctx.fillText(userName || "John Doe", canvas.width / 2, 200);

        // Achievement
        ctx.font = "20px Arial, sans-serif";
        ctx.fillStyle = "#333";
        ctx.fillText(
            `has successfully completed the Sustainable Living course`,
            canvas.width / 2,
            250
        );
        ctx.fillText(`with a score of ${score || 0}%`, canvas.width / 2, 280);

        // Date
        const currentDate = new Date().toLocaleDateString();
        ctx.font = "18px Arial, sans-serif";
        ctx.fillText(`Date: ${currentDate}`, canvas.width / 2, 330);

        // Footer
        ctx.font = "16px Arial, sans-serif";
        ctx.fillStyle = "#777";
        ctx.fillText("Powered by Your Application", canvas.width / 2, 370);
    }, [userName, score]);

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = `${userName || 'Certificate'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    return (
        <div className="certificate-container">
            <canvas ref={canvasRef} width={800} height={450}></canvas>
            <button onClick={handleDownload} className="download-btn">
                Download Certificate
            </button>
        </div>
    );
};

export default Certificate;
