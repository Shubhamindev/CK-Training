import React, { useEffect, useState } from "react";

export default function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const storedUsers = JSON.parse(localStorage.getItem("signupData")) || [];

    const currentUser = storedUsers.find(
      (user) => user.email === loginData?.email
    );

    if (currentUser) {
      setUserData(currentUser);
    }
  }, []);

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-lg font-medium text-gray-800">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-full mx-4 border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Profile
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <p className="text-lg text-gray-800">{userData.firstName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <p className="text-lg text-gray-800">{userData.lastName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p className="text-lg text-gray-800">{userData.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <p className="text-lg text-gray-800">{userData.gender}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <p className="text-lg text-gray-800">{userData.phoneNo}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <p className="text-lg text-gray-800">{userData.address}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <p className="text-lg text-gray-800">{userData.state}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
