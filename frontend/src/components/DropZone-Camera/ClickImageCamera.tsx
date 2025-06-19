import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const ClickImageCamera:React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setCapturedImage(imageSrc || null);
  };

  return (
    <div className="flex flex-col">
      {!capturedImage && (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            videoConstraints={{
              facingMode: 'environment', 
            }}
            className="w-full rounded shadow"
          />
          <button
            onClick={capture}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Capture Image
          </button>
        </>
      )}

      {capturedImage && (
        <>
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full rounded shadow"
          />
          <button
            onClick={() => setCapturedImage(null)}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retake
          </button>
        </>
      )}
    </div>
  );
};

export default ClickImageCamera;
