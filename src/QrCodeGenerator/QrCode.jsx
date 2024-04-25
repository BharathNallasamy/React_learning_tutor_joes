import React, { useState } from "react";
import "./QrCode.css";

const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("bharath");
  const [qrSize, setQrSize] = useState("150");

  function downloadQr() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "bulb_image.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading Qr code", error);
      });
  }

  async function generateQr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR code", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="app-container">
      <h1>QR Code Generator</h1>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} alt="" className="qrImage" />}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for Qr Code:
        </label>
        <input
          type="text"
          id="dataInput"
          value={qrData}
          placeholder="Enter data for Qr Code"
          onChange={(e) => {
            setQrData(e.target.value);
          }}
        />

        <label htmlFor="sizeInput" className="input-label">
          Image Size (eg., 150):
        </label>
        <input
          type="text"
          id="sizeInput"
          placeholder="Enter image size"
          value={qrSize}
          onChange={(e) => {
            setQrSize(e.target.value);
          }}
        />
        <button
          className="generate-button"
          disabled={loading}
          onClick={generateQr}
        >
          Generate QR Code
        </button>
        <button className="download-button" onClick={downloadQr}>
          Download Qr Code
        </button>
      </div>
      <p className="footer">
        Designed by{" "}
        <a href="#" target="_black">
          Bharath
        </a>
      </p>
    </div>
  );
};

export default QrCode;
