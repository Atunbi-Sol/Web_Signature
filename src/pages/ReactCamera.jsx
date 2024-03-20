import { useRef, useState } from "react";
import Webcam from "react-webcam";
// import selfie from "/img/selfie.svg";

const ReactCamera = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    console.log(imageSrc);
  };

  const recapture = () => {
    setCapturedImage(null);
  };

  const handleCapturedPhoto = (e) => {
    e.preventDefault();
  };

  return (
    <div className="liveness-camera">
      <div className="liveness-camera-header">
        <h5>Liveness Check</h5>
        <p>Face the camera, ensure your face is within the frame</p>
      </div>
      {capturedImage ? (
        <form className="liveness-camera-process">
          <div>
            <img src={capturedImage} alt="captured" className="show-image" />
          </div>
          <div className="liveness-camera-button">
            <button className="liveness-camera-ready retake-photo" onClick={recapture}>
              Retake Photo
            </button>
            <button className="liveness-camera-ready" type="submit" onClick={handleCapturedPhoto}>
              Proceed
            </button>
          </div>
        </form>
      ) : (
        <div className="liveness-camera-container">
          <div className="liveness-camera-frame">
            <Webcam
              ref={webcamRef}
              className="show-image"
              audio={false}
              screenshotFormat="image/jpeg"
              height={720}
              width={1280}
              imageSmoothing={true}
              screenshotQuality={1}
            />
          </div>

          <div className="liveness-camera-button">
            <button className="liveness-camera-ready" onClick={capture}>
              Take Photo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactCamera;
