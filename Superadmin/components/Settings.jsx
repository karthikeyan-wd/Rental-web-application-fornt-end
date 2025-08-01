import React, { useState } from "react";
import { Bell, Lock } from "lucide-react";
import Input from "../../Uitilites/Input";
import Admin from "../../assets/Profile/Admin.jpg"
const Settings = () => {

  const [selectedStates, setSelectedStates] = useState({});

const toggleAvailability = (index) => {
  setSelectedStates((prev) => ({
    ...prev,
    [index]: !prev[index]
  }))
};

  return (
    <div className="max-w-full mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Settings</h1>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 space-y-8">
        <div className="flex items-center mb-6">
          <span className="bg-red-500 w-2 h-8 mr-3 rounded-md"></span>
          <h2 className="text-2xl font-semibold text-gray-800">Profile Settings</h2>
        </div>

        <div className="flex items-center mb-8">
          <div className="relative">
            <div className="h-24 w-24 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={Admin}
                
                className="h-full w-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-semibold text-gray-800">Thamizhselvam</h3>
            <p className="text-gray-500">shop_admin005.com</p>
            <button className="mt-2 px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">First Name</label>
              <Input
                type={"text"}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Last Name</label>
              <Input
                type={"text"}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <Input
              type={"email"}
              defaultValue="john.doe@example.com"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <Input
              type={"number"}
              defaultValue="+91 9876543210"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Location</label>
            <Input
              type={"text"}
              defaultValue="Puducherry, India"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Notifications and Settings Section */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center mb-6">
            <span className="bg-red-500 w-2 h-8 mr-3 rounded-md"></span>
            <h2 className="text-2xl font-semibold text-gray-800">Notifications & Preferences</h2>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="text-lg text-gray-700">Enable Notifications</span>
            </div>
            <div
             onClick={() => toggleAvailability(1)} // Added click handler
              className={`w-14 h-7 rounded-full  flex items-center cursor-pointer transition-all duration-300 ${
                selectedStates ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${
                  selectedStates ? "translate-x-7" : "translate-x-1"
                }`}
              ></div>
            </div>
          </div>

          

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Lock className="h-5 w-5 text-gray-600" />
              <span className="text-lg text-gray-700">Two-Factor Authentication</span>
            </div>
            <div onClick={() => toggleAvailability(2)}
              className={`w-14 h-7 rounded-full flex items-center cursor-pointer transition-all duration-300 ${
                selectedStates? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${
                  selectedStates ? "translate-x-7" : "translate-x-1"
                }`}
              ></div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
