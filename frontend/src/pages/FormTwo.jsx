import { ArrowLeft, MapPin } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


export const FormTwo = () => {
  // Safely destructure with fallback
  const {newReport, setNewReport, createReport, loading} = useContext(UserContext) || {};
 
console.log(newReport);

  // Local state for description
  const [description, setDescription] = useState(newReport.description || "");
const navigate= useNavigate()
  // Sync description with newReport safely
  useEffect(() => {
    if (setNewReport) {
      setNewReport((prev) => ({
        ...prev,
        description: description,
      }));
    }
  }, [description, setNewReport]);

  async function handleSubmit(e){
    e.preventDefault()
    await createReport()
    console.log("submitted");
    navigate("/");
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
      <div className="flex-1 overflow-y-auto pb-12">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center gap-4 bg-white px-4 py-5 shadow-sm">
          <ArrowLeft size={24} className="text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold">Report New Issue</h1>
            <p className="text-sm font-semibold text-gray-500">Step 2 of 2</p>
          </div>
        </header>

        {/* Image */}
        {newReport.imageUrl ? (
          <div className="w-full mb-8 p-3">
            <img
              src={URL.createObjectURL(newReport.imageUrl)}
              alt="Issue Image"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        ) : (
          <div className="w-full mb-8 p-3">
            <img
              src="https://placehold.co/600x400/E5E7EB/9CA3AF?text=No+Image"
              alt="Placeholder"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Issue Detail */}
        <div className="border-2 border-gray-300 mx-4 rounded-lg p-4 space-y-5 bg-white shadow-sm">
          <h3 className="text-xl font-bold">Issue Detail</h3>
          <div className="space-y-1">
            <h1 className="text-md font-semibold text-gray-700">
              Category: {newReport.title || "Not classified"}
            </h1>
          </div>

          <div className="space-y-1">
            <h1 className="text-md font-semibold text-gray-700">Location</h1>
            <div className="space-y-2">
              <button className="rounded-lg border-2 border-gray-300 px-4 py-3 flex items-center space-x-2 w-full text-left bg-gray-100">
                <MapPin className="text-red-500" />
                <div className="text-gray-600 font-medium">
                  {newReport.location?.address || "Location not available"}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 space-y-2">
          <h1 className="font-semibold text-lg text-gray-700">Description(optional)</h1>
          <textarea
            className="border-2 border-gray-300 rounded-lg p-4 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
            placeholder="Describe the issue in detail"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="bg-green-600 text-white text-center rounded-lg px-6 py-3 mt-4 hover:bg-green-700 transition-colors duration-200 shadow-md">
            Voice Note
          </button>
        </div>

        {/* Submit Button */}
        <div className="px-4 py-8 shadow-lg bg-gray-50">
          <button className="w-full bg-blue-600 text-white font-semibold text-center p-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 transform hover:scale-[1.01] active:scale-100" disabled= {loading} 
          onClick={handleSubmit} >
            {loading? "submitting": "submit"}
          </button>
        </div>
      </div>
    </div>
  );
};
