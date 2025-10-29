import { useState, useRef, useContext } from "react";
import { TechnicianContext } from "../contexts/TechnicianContext";

export default function CameraCapture({ reportId }) {
  const { setReportDetails } = useContext(TechnicianContext);

  const [cameraOpen, setCameraOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } },
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      console.error("Back camera not found, falling back to default", err);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      if (!blob) return;
      const imgUrl = URL.createObjectURL(blob);

      setFile(blob);
      setPreview(imgUrl);

      // ✅ Directly set resolvedImageUrl in reportDetails
      setReportDetails((prev) => ({
        ...prev,
        resolvedImageUrl: imgUrl,
      }));
    }, "image/jpeg");

    stopCamera();
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) stream.getTracks().forEach((track) => track.stop());
    setCameraOpen(false);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Camera Capture</h2>

      {!cameraOpen && !preview && (
        <button
          onClick={startCamera}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Open Camera
        </button>
      )}

      {cameraOpen && (
        <div className="flex flex-col items-center space-y-2">
          <video ref={videoRef} className="w-full rounded-md" />
          <div className="space-x-2">
            <button
              onClick={capturePhoto}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Capture
            </button>
            <button
              onClick={stopCamera}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {preview && (
        <div className="flex flex-col items-center space-y-2">
          <img src={preview} alt="Preview" className="w-full rounded-md" />
          <button
            onClick={() => {
              setPreview(null);
              setFile(null);
              startCamera();
            }}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
          >
            Retake
          </button>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
