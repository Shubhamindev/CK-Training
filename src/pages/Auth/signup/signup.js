import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormConfig from "../FormConfig";
export default function SignUp() {

  const { title, fields } = FormConfig.signup;

  const [formData, setFormData] = useState(() =>
    fields.reduce((acc, field) => {
      acc[field.name] = field.type === "checkbox" ? false : "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
  
    try {
      const storedUsers = JSON.parse(localStorage.getItem("signupData")) || [];
      
      if (Array.isArray(storedUsers)) {
        const userExists = storedUsers.some(user => user.email === formData.email);
        
        if (userExists) {
          alert("Account already exists. Please login.");
          return;
        }
        const updatedUsers = [...storedUsers, formData];
        localStorage.setItem("signupData", JSON.stringify(updatedUsers));
      } else {
        localStorage.setItem("signupData", JSON.stringify([formData]));
      }
      
      alert("Signup Successful!");
      
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup Failed!");

    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          {title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4" >
          {fields.map((field) => {
            if (field.type === "radio") {
              return (
                <div key={field.name}>
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-700">
                      {field.label}
                    </legend>
                    <div className="flex gap-3">
                      {(field.options || []).map((option) => {
                        const value =
                          typeof option === "object" ? option.value : option;
                        const label =
                          typeof option === "object" ? option.label : option;
                        return (
                          <label key={value} className="flex items-center">
                            <input
                              type="radio"
                              name={field.name}
                              value={value}
                              checked={formData[field.name] === value}
                              onChange={handleChange}
                              required={field.required}
                              className="mr-2"
                            />
                            {label}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                </div>
              );
            } else if (field.type === "dropdown" && field.name === "state") {
              return (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-black">
                    {field.label}
                  </label>
                  <select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="mt-1 w-full px-4 py-2 rounded-lg border outline-none text-sm"
                  >
                    {field.options &&
                      field.options.length > 0 &&
                      field.options.map((option) => {
                        const value =
                          typeof option === "object" ? option.value : option;
                        const label =
                          typeof option === "object" ? option.label : option;
                        return (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        );
                      })}
                  </select>
                </div>
              );
            } else if (field.type === "checkbox") {
              return (
                <div key={field.name} className="flex items-center">
                  <input
                    type="checkbox"
                    id={field.name}
                    name={field.name}
                    checked={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={field.name}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {field.label}
                  </label>
                </div>
              );
            } else if (field.type === "password") {
              return (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    minLength={field.minLength}
                    maxLength={field.maxLength}
                    placeholder={field.placeholder}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Password must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters"
                    className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                  />
                  {field.name === "confirmPassword" &&
                    formData.password !== formData.confirmPassword &&
                    formData.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        Passwords do not match
                      </p>
                    )}
                </div>
              );
            } else if (field.type === "textarea") {
              return (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    maxLength={field.maxLength}
                    placeholder={field.placeholder}
                    className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                  ></textarea>
                </div>
              );
            } else {
              return (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    minLength={field.minLength}
                    maxLength={field.maxLength}
                    pattern={field.pattern}
                    placeholder={field.placeholder}
                    className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    
                  />
                </div>
              );
            }
          })}

          <button
            type="submit"
            className={`w-full h-11 ${
              formData.password !== formData.confirmPassword ||
              !formData.password ||
              !formData.confirmPassword
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white transition-all duration-200 py-2 rounded-lg font-medium`}
            disabled={formData.password !== formData.confirmPassword || !formData.password || !formData.confirmPassword}
          >
            SignUp
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
