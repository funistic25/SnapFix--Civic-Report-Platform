import { Home, MapPin, Globe, User, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = ({lable_1, lable_2}) => {
  const navigate = useNavigate();
    return (
      <div className="px-3 py-6 flex justify-between shadow-lg">
        <div className="">
          <h1 className="text-2xl font-bold ">{lable_1}</h1>
          <p className="text-gray-400">{lable_2}</p>
        </div>
        <button
          className="px-2 py-1 bg-blue-500 text-white text-sm flex items-center gap-1 rounded-md"
          onClick={() => navigate("/reportIssue")}
        >
          <Plus className="w-5 h-9" />
          Report New Issue
        </button>
      </div>
    );
}

