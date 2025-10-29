import { useState, useRef, useContext, useEffect } from "react";
import { ArrowLeft, Camera } from "lucide-react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClassifyImage } from "../lib/ImageClassify";

// Function to get current location + address using LocationIQ
async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) return reject("Geolocation not supported");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          const apiKey = "pk.3a86dbc9e018d8762ff765be4cd2cd18"; // Your real key
          const url = `https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${lat}&lon=${lon}&format=json&accept-language=en`;
          const { data } = await axios.get(url);

          let address = data.display_name || "";
          if (address.includes(",")) {
            address = address.split(" ").slice(0, 5).join(" ");
          } else {
            address = address.split(" ").slice(0, 4).join(" ");
          }

          resolve({
            latitude: lat,
            longitude: lon,
            address,
          });
        } catch (err) {
          reject("Failed to fetch address");
        }
      },
      (err) => reject(err.message),
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  });
}

export const UserNewReport = () => {
  const { newReport, setNewReport } = useContext(UserContext);
  const navigate = useNavigate();
  const [cameraOpen, setCameraOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("changed: ", newReport);
  }, [newReport]);

  // Start camera
  const startCamera = async () => {
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } },
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  };

  // Stop camera
  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) stream.getTracks().forEach((t) => t.stop());
    setCameraOpen(false);
  };

  // Capture photo + get location
  const capturePhoto = async () => {
    setProcessing(true);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      setFile(blob);
      setPreview(URL.createObjectURL(blob));

      try {
        const locationData = await getCurrentLocation();
        let category; // declare outside
        // directly send blob to categorizeIssue
        try {
          category = await ClassifyImage(blob);
        } catch (err) {
          console.error("Classification failed:", err);
          alert("The model is busy. Please try uploading the image again.");
        }
        console.log("Predicted category:", category);
        setNewReport((prev) => ({
          ...prev,
          imageUrl: blob,
          location: locationData,
          title: category,
        }));
      } catch (err) {
        console.error("Error fetching location or categorizing:", err);
      }

      setProcessing(false);
    }, "image/jpeg");

    stopCamera();
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex items-center gap-3 border-b border-gray-200">
        <button
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 mr-2"
          onClick={() => navigate("/userReportsPage")}
        >
          <ArrowLeft className="w-7 h-7" />
        </button>

        <div>
          <h1 className="text-lg font-semibold text-gray-800">
            Report New Issue
          </h1>
          <p className="text-sm text-gray-500">Step 1 of 2</p>
        </div>
      </header>

      {/* Main */}
      <main className="p-4 sm:p-6">
        <div className="bg-bl rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center space-y-4 w-full max-w-md">
          {/* Upload prompt */}
          {!cameraOpen && !file && (
            <div className="text-center mb-6 p-6">
              <div className="flex justify-center mb-2">
                <Camera size={48} className="text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-700">
                Upload a Photo
              </h2>
              <p className="text-gray-500 text-sm">
                Take a photo or select one from your gallery to document the
                issue.
              </p>
            </div>
          )}

          {/* Start camera button */}
          {!cameraOpen && !preview && (
            <div className="w-full px-2">
              <button
                onClick={startCamera}
                className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
              >
                {processing ? "Processing..." : "Take Photo"}
              </button>
            </div>
          )}

          {/* Camera preview */}
          {cameraOpen && (
            <div className="w-full space-y-3">
              <video
                ref={videoRef}
                className="w-full h-[67vh] object-cover rounded-lg"
              />
              <div className="flex justify-center gap-3">
                <button
                  onClick={capturePhoto}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  {processing ? "Processing..." : "Capture"}
                </button>
                <button
                  onClick={stopCamera}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Photo preview + confirm */}
          {preview && (
            <div className="w-full space-y-3">
              <img src={preview} alt="Preview" className="w-full rounded-md" />
              {newReport?.location?.address && (
                <p
                  className="text-sm text-gray-700"
                  style={{ fontFamily: "Arial, sans-serif" }}
                  spellCheck={false}
                  autoCorrect="off"
                  autoCapitalize="off"
                >
                  📍 Location: {newReport.location.address} <br />
                  Lat: {newReport.location.latitude}, Lon:{" "}
                  {newReport.location.longitude}
                </p>
              )}
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => navigate("/Form2")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Confirm
                </button>
                <button
                  onClick={() => {
                    setPreview(null);
                    setFile(null);
                    setNewReport((prev) => ({
                      ...prev,
                      imageUrl: null,
                      location: null,
                    }));
                    startCamera();
                  }}
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  Retake
                </button>
              </div>
            </div>
          )}

          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
      </main>
    </div>
  );
};
