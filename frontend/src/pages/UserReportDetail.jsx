import React from "react";
import { Droplet, MapPin, User, Home, Globe, Plus } from 'lucide-react';
export  function ReportDetails() {
  return (
    <div className=" bg-gray-100 h-screen">
      {/* Main container */}
      <div className="max-w-md mx-auto bg-white h-full  overflow-y-auto">
        {/* Header */}
        <header className="p-4  bg-white sticky top-0 z-10">
          <h1 className="text-lg font-semibold">Report Details</h1>
        </header>

        {/* Image Section */}
        <div className="w-full  mb-8 p-3">
          <img
            src="https://picsum.photos/200"
            alt="Broken Pipe"
            className="w-full h-48 object-cover rounded-lg "
          />
        </div>

        {/* Report Info */}
        <div className="p-4 space-y-4 border border-2 rounded-lg m-4 border-gray-300 shadow-lg ">
          <div className="flex items-center">
            <div className="bg-blue-100 h-10 flex items-center rounded-full mr-4">

              <Droplet className="text-blue-600  rounded-lg  mx-2"/>

            </div>
            <div >
              <h2 className="text-xl font-semibold">Broken Water Pipe</h2>

              <p   className="text-gray-500 font-medium">Water & Plumbing</p>
               <span className="px-2 py-1 bg-yellow-100 text-yellow-500 rounded text-sm">
              In Progress
            </span>
            </div>

          </div>

          <div className=" flex  space-x-3">
            <div>
              <MapPin></MapPin>
            </div>

            <div>

              <span className="font-semibold text-black">Location</span>
              <p className="text-gray-500">123 Main Street, Downtown</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Description</h3>
            <p className="text-gray-700">
              Large water leak on Main Street causing flooding issues
            </p>
          </div>
        </div>

        {/* Technician Info */}
        <div className="p-4  flex space-x-3 border border-2 border-gray-300 mx-4 shadow-lg rounded-lg">
          <div>
            <User />
          </div>
          <div>

            <h3 className="font-semibold">Assigned Technician</h3>
            <p className="text-gray-600">Mike Thompson</p>
            <p className="text-gray-500 text-sm">mike@cityworks.gov</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="p-4  space-y-3">
          <h3 className="font-semibold">Timeline</h3>

          <div className="flex justify-between">
            <span className="px-2 py-1 bg-red-100 text-red-500 rounded text-sm">
              Pending
            </span>
            <span className="text-gray-600">Jan 15, 2024 - 4:00 PM</span>
          </div>

          <div className="flex justify-between">
            <span className="px-2 py-1 bg-yellow-100 text-yellow-500 rounded text-sm">
              In Progress
            </span>
            <span className="text-gray-600">Jan 16, 2024 - 3:30 PM</span>
          </div>

          <p className="text-gray-700 text-sm">Technician assigned</p>
        </div>

        {/* Upload Button */}
        <div className="p-4 pb-20">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg shadow">
            Uploaded (12)
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-around ">

          <div className="flex flex-col items-center text-blue-500">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center text-blue-500">
            <MapPin className="w-6 h-6" />
            <span className="text-xs">My Reports</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <Globe className="w-6 h-6" />
            <span className="text-xs">Explore</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </div>
        </div>
        </div>
    </div>
  );
}
