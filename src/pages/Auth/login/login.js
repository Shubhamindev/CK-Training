import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormConfig from "../FormConfig";

const { fields } = FormConfig.login;

export default function Login() {
  const [formData, setFormData] = useState(() =>
    fields.reduce((acc, field) => {
      acc[field.name] = field.type === "checkbox" ? false : "";
      return acc;
    }, {})
  );

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    e.preventDefault();
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const storedUsers = JSON.parse(localStorage.getItem("signupData")) || [];

      const user = storedUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (!user) {
        alert("Invalid Email or Password!");
        return;
      }


      alert("Login Successful!");
      localStorage.setItem("loginData", JSON.stringify(formData));
      console.log("Login Data:", formData);
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login Failed! Something went wrong.");
    }
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Welcome Back</h2>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full text-sm px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 py-2 rounded-lg font-medium"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
