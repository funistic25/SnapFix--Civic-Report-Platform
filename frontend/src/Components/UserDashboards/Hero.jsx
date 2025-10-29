import { useNavigate } from "react-router-dom"


export const Hero = () => {
    const navigate = useNavigate()
    return (
      <div className="px-5 ">
        <div className="space-y-5 pt-6">
          <h1 className="font-bold text-3xl    ">
            Report Issues,
            <span className="text-blue-800 block">Transform</span>
            Communities
          </h1>
          <p className="text-gray-700">
            Empower citizens to report civic issues and work together with local
            authorities for faster resolutions.
          </p>
        </div>
        <div className="mt-4 space-x-4">
          <button className=" p-3 text-white rounded-lg border border-2 border-blue-400  bg-blue-400">
            View Dashboard
          </button>
          <button
            className="0 p-3  rounded-lg border border-2 border-blue-400 text-blue-400"
            onClick={() => navigate("/reportIssue")}
          >
            Report an issue
          </button>
        </div>
      </div>
    );
}

