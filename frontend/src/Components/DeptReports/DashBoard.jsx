import { Heading } from "../DeptTechnician/Heading";


import { FaUserFriends  } from "react-icons/fa"; 
import {  CiTimer } from "react-icons/ci"; 

export const DashBoard = () => {
  return (
    <div className="p-6 bg-indigo-50 w-full">
        {/* Header */}
        <div>

            <Heading
            label_1="Report Detail "
            label_2="Report ID: RPT-001"
            ></Heading>
        </div>
      <div className=" flex mt-7">
        <div className="space-y-6 mr-8">


            {/* Report Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex justify-between items-start">
                <div>
                <h1 className="text-xl font-semibold">Water Leak</h1>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm px-2 py-1 rounded bg-yellow-100 text-yellow-800">
                    Pending
                    </span>
                    <span className="text-sm px-2 py-1 rounded bg-red-100 text-red-800">
                    High Priority
                    </span>
                </div>
                </div>
                <p className="text-sm text-gray-400">2024-01-10 14:20</p>
            </div>
            <p className="text-gray-700 text-sm">
                Large water leak near the intersection causing flooding. The water
                appears to be coming from a main pipe underground and has created a
                significant puddle that’s affecting vehicle traffic.
            </p>
            <p className="text-gray-800 font-medium">📍 Main St & 5th Ave</p>
            </div>

            {/* Citizen Info */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold mb-2">Citizen Information</h2>
            <p>
                <strong>Name:</strong> John Doe
            </p>
            <p>
                <strong>Email:</strong> john.doe@email.com
            </p>
            <p>
                <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            </div>

            {/* Report Photos */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold mb-2">Report Photos</h2>
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg text-gray-400">
                No Photos Available
            </div>
            </div>
        </div>

        {/* Side Panel */}
        <div className="     w-[25%] ">
          {/* <div className="lg:col-span-2"></div> */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
                <div className=" ml-2 flex space-x-2">

                    <FaUserFriends />
                <label className="block text-sm font-medium mb-2">
                    Assign Technician
                </label>
                </div>
              <select className="w-full border rounded-lg p-2">
                <option>Select a Technician</option>
              </select>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex space-x-2">
                    <CiTimer/>
                    <label className="block text-sm font-medium mb-2">
                        Update Status
                    </label>
                </div>
              <select className="w-full border rounded-lg p-2">
                <option>Pending</option>
              </select>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <h3 className="font-medium mb-2">Location Map</h3>
              <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
