import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCog } from "lucide-react";

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loginData"));
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="top-0 left-0 right-0 z-10">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg">
          <nav className="flex items-center justify-between p-6">
            <ul className="flex items-center space-x-6">
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link to="/" className="text-gray-800 hover:text-gray-600 text-m font-medium transition duration-300">
                  Home
                </Link>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link to="/about" className="text-gray-800 hover:text-gray-600 text-m font-medium transition duration-300">
                  About
                </Link>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link to="/contact" className="text-gray-800 hover:text-gray-600 text-m font-medium transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>

            {/* User Dropdown */}
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="focus:outline-none">
                <UserCog className="w-6 h-6 text-gray-800 hover:text-gray-600 transition duration-300" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <ul className="py-2 text-sm text-gray-700">
                    {isLoggedIn && (
                      <>
                        <li>
                          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
                            Settings
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    )}

                    {!isLoggedIn && (
                      <li>
                        <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
                          Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
