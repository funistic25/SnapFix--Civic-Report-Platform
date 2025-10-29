import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../lib/utils";
import { UserContext } from "../contexts/UserContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ArrowLeft } from "lucide-react";

// Fix Leaflet marker issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export const SelectedReport = () => {
  const navigate = useNavigate();
  const {reportId} = useParams();
  const {singleReport, loading} = useContext(UserContext)

  const [reportDetails, setReportDetails] = useState({});

  useEffect(() => {
    const fetchReport = async () => {
      const data = await singleReport(reportId);
      
      setReportDetails(data || {});
    };
    fetchReport();
  }, [reportId]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-600 border border-red-200">
            Pending
          </span>
        );
      case "In Progress":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-600 border border-yellow-200">
            In Progress
          </span>
        );
      case "Resolved":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600 border border-green-200">
            Resolved
          </span>
        );
      case "Assigned":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600 border border-blue-200">
            Assigned
          </span>
        );
      default:
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
            {status || "Unknown"}
          </span>
        );
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white">
            High Priority
          </span>
        );
      case "Medium":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-600 border border-yellow-200">
            Medium Priority
          </span>
        );
      case "Low":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
            Low Priority
          </span>
        );
      default:
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
            {priority || "Low"}
          </span>
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 p-6 sm:p-10 font-sans text-slate-800">
        ..fetching report
      </div>
    );
  }

  if (!reportDetails || Object.keys(reportDetails).length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Report Not Found</h1>
          <p className="text-gray-500 mt-2">
            The requested report could not be found.
          </p>
          <button
            onClick={() => navigate("/UserDashboard")}
            className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors"
          >
            Back to Reports
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 sm:p-10 font-sans text-slate-800">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex items-center space-x-2 text-slate-600 mb-4 sm:mb-0 hover:cursor-pointer"
            onClick={() => navigate("/userReportsPage")}
          >
            <ArrowLeft />
            <span className="text-sm font-medium">Back to Reports</span>
          </div>
          <div className="text-2xl font-semibold">Report Details</div>
          <div className="text-sm text-slate-500">
            Report ID: {reportDetails?.reportId || "RPT-000"}
          </div>
        </header>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Left */}
          <main className="w-full lg:w-2/3 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-bold">{reportDetails.title}</h2>
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  {getStatusBadge(reportDetails.status)}
                  {getPriorityBadge(reportDetails.priority)}
                </div>
              </div>
              <div className="text-sm text-slate-500">
                {reportDetails?.createdAt
                  ? formatDate(reportDetails.createdAt)
                  : ""}
              </div>
            </div>

            {/* Photo */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <h2 className="text-xl font-bold">Report Photo</h2>
              {reportDetails.imageUrl ? (
                <img
                  src={reportDetails.imageUrl}
                  alt="Report"
                  className="w-full h-48 object-cover rounded-md"
                />
              ) : (
                <div className="bg-slate-200 h-48 rounded-md flex items-center justify-center text-slate-500">
                  <span className="text-sm">No photos available</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <h3 className="text-sm font-bold text-slate-700 uppercase mb-1">
                Description
              </h3>
              <p className="text-sm text-slate-600">
                {reportDetails?.description}
              </p>
            </div>

            {/* Resolution */}
            {reportDetails?.status === "Resolved" && (
              <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                <h2 className="text-xl font-bold">Resolution Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-700 uppercase mb-1">
                      Started At
                    </h3>
                    <p className="text-sm text-slate-600">
                      {reportDetails.startedAt
                        ? formatDate(reportDetails.startedAt)
                        : "--"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-700 uppercase mb-1">
                      Resolved On
                    </h3>
                    <p className="text-sm text-slate-600">
                      {reportDetails.resolvedTime
                        ? formatDate(reportDetails.resolvedTime)
                        : "--"}
                    </p>
                  </div>
                </div>
                <h2 className="text-xl font-bold">Resolution Photo</h2>
                <div className="bg-slate-200 h-48 rounded-md flex items-center justify-center text-slate-500">
                  {reportDetails.resolvedImageUrl ? (
                    <img
                      src={reportDetails.resolvedImageUrl}
                      alt="Resolution"
                      className="h-48 w-auto object-cover rounded-md shadow"
                    />
                  ) : (
                    <span className="text-sm text-slate-500">
                      No photo uploaded
                    </span>
                  )}
                </div>
              </div>
            )}
          </main>

          {/* Right - Location */}
          <aside className="w-full lg:w-1/3 space-y-6 mt-6 lg:mt-0">
            <div className="bg-white p-1 rounded-xl shadow-md space-y-4">
              <h2 className="text-xl font-bold">Location Map</h2>

              {reportDetails?.location?.latitude &&
              reportDetails?.location?.longitude ? (
                <MapContainer
                  center={[
                    reportDetails.location.latitude,
                    reportDetails.location.longitude,
                  ]}
                  zoom={15}
                  className="h-48 w-full rounded-md"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[
                      reportDetails.location.latitude,
                      reportDetails.location.longitude,
                    ]}
                  >
                    <Popup>
                      {reportDetails?.location?.address || "Reported Location"}
                    </Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <div className="bg-slate-200 h-48 rounded-md flex items-center justify-center text-slate-500 flex-col">
                  <p className="text-sm font-semibold">Interactive Map</p>
                  <p className="text-xs text-slate-400">
                    {reportDetails?.location?.address || "address"}
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Feedback Form */}
        {
          !reportDetails.resolvedImageUrl ? "" : 
        
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4 mt-6">
          <h2 className="text-xl font-bold">Your Feedback</h2>
          <textarea
            className="w-full h-28 p-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your feedback here..."
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-700 transition"
          >
            Send Feedback
          </button>
        </div>
        }
      </div>
      <div className="h-20"></div>
    </div>
  );
};
