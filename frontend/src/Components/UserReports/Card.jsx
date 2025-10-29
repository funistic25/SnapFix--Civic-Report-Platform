import { Home, MapPin, ThumbsUp, Clock, Tag, ArrowRight, ArrowLeft } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { formatDate } from "../../lib/utils";
import { useNavigate } from "react-router-dom";


// Main Card Component
export const Card = () => {
  const navigate = useNavigate()
  const { myReports } = useContext(UserContext);
  const [reportsList, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedReportId, setSelectedReportId] = useState(null);

  useEffect(() => {
    const fetchAllReports = async () => {
      setIsLoading(true);
      const data = await myReports();
      setReports(data || []);
      setIsLoading(false);
    };
    fetchAllReports();
  }, []);

  const getStatusBadge = (status) => {
    let colorClass = "";
    switch (status) {
      case "Pending":
        colorClass = "bg-red-50 text-red-600 border-red-200";
        break;
      case "In Progress":
        colorClass = "bg-yellow-50 text-yellow-600 border-yellow-200";
        break;
      case "Resolved":
        colorClass = "bg-green-50 text-green-600 border-green-200";
        break;
      case "Assigned":
        colorClass = "bg-blue-50 text-blue-600 border-blue-200";
        break;
      default:
        colorClass = "bg-gray-50 text-gray-600 border-gray-200";
    }
    return (
      <span
        className={`px-2 py-1 text-xs font-semibold rounded-full border ${colorClass}`}
      >
        {status}
      </span>
    );
  };


  if (isLoading) {
    return (
     <div className="min-h-[300px] flex justify-center items-center text-gray-500">
      <div className="flex items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-indigo-500"></div>
        <span className="ml-4">Loading reports...</span>
      </div>
    </div>
    );
  }

  if (reportsList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-gray-500 bg-white rounded-xl shadow-lg border border-gray-200">
        <Home className="w-12 h-12 mb-4 text-gray-400" />
        <p className="text-lg font-semibold mb-2">No Reports Found</p>
        <p className="text-sm">
          It looks like you haven't submitted any reports yet.
        </p>
      </div>
    );
  }

  if (selectedReportId) {
    const selectedReport = reportsList.find((r) => r._id === selectedReportId);
    if (!selectedReport) {
      // Handle case where report is not found
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center text-gray-500 bg-white rounded-xl shadow-lg border border-gray-200">
          <p className="text-lg font-semibold mb-2">Report Not Found</p>
          <button
            onClick={() => {setSelectedReportId(null);  navigate("/");}}
            className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      );
    }
  }

  return (
    <div className="space-y-4">
      {reportsList.map((report) => (
        <div
          key={report._id}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 transition-transform duration-200 hover:scale-[1.01] hover:shadow-md cursor-pointer"
          onClick={() => setSelectedReportId(report._id)}
        >
          {/* Header Section */}
          <div className="flex justify-between items-center mb-2">
            <h5 className="font-bold text-2xl sm:text-2xl md:text-xl text-gray-800 break-words max-w-[80%]">
              {report.title}
            </h5>
            {report.status ? getStatusBadge(report.status) : null}
          </div>

          {/* Details Section */}
          <div className="text-base sm:text-base md:text-sm text-gray-600 space-y-2 mb-3">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-gray-500" />
              <span className="break-words leading-5">
                {report?.location?.address || "Address Not Provided"}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-gray-500" />
              <span>
                Reported on{" "}
                {report.createdAt ? formatDate(report.createdAt) : "--"}
              </span>
            </div>
            <div className="flex items-center">
              <Tag className="w-5 h-5 mr-2 text-gray-500" />
              <span className="text-xs text-gray-500 font-mono">
                ID: {report.reportId}
              </span>
            </div>
          </div>

          {/* Upvotes and Arrow Section */}
          <div className="flex justify-between items-center text-base sm:text-base md:text-sm text-gray-500">
            <div className="flex items-center cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ThumbsUp className="w-5 h-5 mr-1 text-blue-500" />
              <span>{report.upvotes || 1} Upvotes</span>
            </div>
            <ArrowRight onClick={()=>navigate(`/singleReport/${report._id}`)} className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
          </div>
        </div>
      ))}
    </div>
  );
};