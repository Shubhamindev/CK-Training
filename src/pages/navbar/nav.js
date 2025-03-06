import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCog, Sun, Moon, ShoppingCart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";


export default function Nav() {
  const { cart } = useContext(CartContext);
  const { theme, toggleTheme } = useTheme(); 
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
    <div className="top-0 left-0 right-0 z-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="rounded-lg shadow-lg">
          <nav className="flex items-center justify-between p-6">
            <ul className="flex items-center space-x-6">
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link to="/" className="text-gray-800 dark:text-gray-100 text-m font-medium transition duration-300">
                  Home
                </Link>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link to="/about" className="text-gray-800 dark:text-gray-100 text-m font-medium transition duration-300">
                  About
                </Link>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link to="/contact" className="text-gray-800 dark:text-gray-100 text-m font-medium transition duration-300">
                  Contact
                </Link>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link to="/products" className="text-gray-800 dark:text-gray-100 text-m font-medium transition duration-300">
                Products
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative">
                <ShoppingCart/>  <span className="bg-red-500 text-white text-xs rounded-full px-2 absolute -top-2 -right-2">{cart.length}</span>
            </Link>

            

              <button onClick={toggleTheme} className="focus:outline-none">
                {theme === "light" ? (
                  <Moon className="w-6 h-6 text-gray-800 dark:text-white transition duration-300" />
                ) : (
                  <Sun className="w-6 h-6 text-yellow-500 transition duration-300" />
                )}
              </button>

              <div className="relative">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="focus:outline-none">
                  <UserCog className="w-6 h-6 text-gray-800 dark:text-gray-100 transition duration-300" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-100">
                      {isLoggedIn && (
                        <>
                          <li>
                            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                              Profile
                            </Link>
                          </li>
                          <li>
                            <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                              Settings
                            </Link>
                          </li>
                          <li>
                            <Link to="/assignment" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                             React Hook Assignment
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={handleLogout}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              Logout
                            </button>
                          </li>
                        </>
                      )}

                      {!isLoggedIn && (
                        <li>
                          <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                            Login
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
