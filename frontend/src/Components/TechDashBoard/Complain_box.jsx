import { useContext, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { TechnicianContext } from "../../contexts/TechnicianContext";
import {
  ArrowRightCircle,
  CheckCircle,
  LoaderCircle,
  PlayCircle,
} from "lucide-react";

export const ComplainBox = ({
  _id: reportId,
  title,
  status,
  priority,
  location,
}) => {
  const { startTask } = useContext(TechnicianContext);
  const [taskStatus, setTaskStatus] = useState(status);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const handleStartTask = async () => {
    if (taskStatus === "In Progress" || taskStatus === "Resolved") return; // already started or resolved
    try {
      setLoad(true);
      await startTask(reportId); // API call
      setTaskStatus("In Progress"); // update local state
    } catch (err) {
      console.error(err);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="p-4 space-y-4 bg-white rounded-lg shadow">
      {/* Heading and Progress */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="font-md font-medium text-black">{title}</div>
        <div className="bg-gray-200 p-2 rounded-lg font-medium text-sm mt-2 sm:mt-0 sm:ml-4">
          {status}
        </div>
      </div>

      {/* Location */}
      <div className="text-sm text-gray-400 flex items-center space-x-1">
        <IoLocationOutline />
        <span>{location.address}</span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 space-y-2 sm:space-y-0">
        <button
          className={`w-full sm:w-auto px-6 py-3 rounded-xl shadow-lg transition transform duration-200 ease-in-out flex items-center justify-center space-x-2
            ${
              taskStatus === "In Progress"
                ? "bg-green-500 hover:bg-green-600 text-white"
                : taskStatus === "Resolved"
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }
            ${
              load || taskStatus === "In Progress" || taskStatus === "Resolved"
                ? "cursor-not-allowed opacity-75"
                : "hover:scale-105"
            }`}
          onClick={handleStartTask}
          disabled={
            load || taskStatus === "In Progress" || taskStatus === "Resolved"
          }
        >
          {load ? (
            <>
              <LoaderCircle className="animate-spin" size={20} />
              <span>Starting...</span>
            </>
          ) : taskStatus === "In Progress" ? (
            <>
              <CheckCircle size={20} />
              <span>In Progress</span>
            </>
          ) : taskStatus === "Resolved" ? (
            <>
              <CheckCircle size={20} />
              <span>Resolved</span>
            </>
          ) : (
            <>
              <PlayCircle size={20} />
              <span>Start Work</span>
            </>
          )}
        </button>

        <button
          className="w-full sm:w-auto px-6 py-3 rounded-xl shadow-lg bg-orange-400 text-white hover:bg-orange-500 transition transform duration-200 ease-in-out hover:scale-105 flex items-center justify-center space-x-2"
          onClick={() => navigate(`/report/${reportId}`)}
        >
          <ArrowRightCircle size={20} />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};
