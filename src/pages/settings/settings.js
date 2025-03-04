import React, { useState } from "react";

export default function Settings() {
  const [selectedTab, setSelectedTab] = useState("account");

  const tabs = [
    { id: "account", name: "Account" },
    { id: "security", name: "Security" },
    { id: "notifications", name: "Notifications" },
    { id: "privacy", name: "Privacy" },
    { id: "appearance", name: "Appearance" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg flex">
      <div className="w-1/3 border-r pr-6">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <ul className="space-y-3">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`cursor-pointer p-2 rounded-lg ${
                selectedTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/3 pl-6">
        {selectedTab === "account" && (
          <div>
            <h3 className="text-lg font-medium mb-3">Account Settings</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Username</label>
              <input type="text" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" className="w-full p-2 border rounded-lg" />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        )}

        {selectedTab === "security" && (
          <div>
            <h3 className="text-lg font-medium mb-3">Security Settings</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">New Password</label>
              <input type="password" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Confirm Password</label>
              <input type="password" className="w-full p-2 border rounded-lg" />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Update Password
            </button>
          </div>
        )}

        {selectedTab === "notifications" && (
          <div>
            <h3 className="text-lg font-medium mb-3">Notification Settings</h3>
            <label className="flex items-center space-x-3 mb-4">
              <input type="checkbox" className="w-5 h-5" />
              <span>Email Notifications</span>
            </label>
            <label className="flex items-center space-x-3 mb-4">
              <input type="checkbox" className="w-5 h-5" />
              <span>Push Notifications</span>
            </label>
          </div>
        )}

        {selectedTab === "privacy" && (
          <div>
            <h3 className="text-lg font-medium mb-3">Privacy Settings</h3>
            <label className="flex items-center space-x-3 mb-4">
              <input type="checkbox" className="w-5 h-5" />
              <span>don't show my mail to others</span>
            </label>
            <label className="flex items-center space-x-3 mb-4">
              <input type="checkbox" className="w-5 h-5" />
              <span>don not disturb</span>
            </label>
          </div>
        )}

        {selectedTab === "appearance" && (
          <div>
            <h3 className="text-lg font-medium mb-3">Appearance Settings</h3>
            <label className="block text-gray-700 font-medium mb-2">Theme</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
