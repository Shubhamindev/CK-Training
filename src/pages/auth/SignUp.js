import React, { useState } from "react";

export default function SignUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    state: "",
    address: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });

  const [err, setErr] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};
    if (data.firstName.length < 2 || data.firstName.length > 30) {
      errors.firstName = "First Name must be 2 to 30 characters";
    }
    if (data.lastName.length < 2 || data.lastName.length > 30) {
      errors.lastName = "Last Name must be 2 to 30 characters";
    }
    if (data.phone.length !== 10) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!data.email.includes("@")) {
      errors.email = "Email must be valid";
    }
    if (data.gender === "") {
      errors.gender = "Select";
    }
    if (data.state === "") {
      errors.state = "Select a state";
    }
    if (data.address.length > 100) {
      errors.address = "Address must be less than 100 characters";
    }
    if (!data.password.length > 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!data.checkbox) {
      errors.checkbox = "You must accept the terms and conditions";
    }
    setErr(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(data);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-2">
      <div className="w-full max-w-xs bg-black p-2 rounded-lg shadow-2xl ">
        <h2 className="text-sm font-semibold text-center text-white">
          Sign Up
        </h2>
        <p className="text-[10px] text-center text-white">
          Create your account
        </p>

        <form className="space-y-1" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-1 ">
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              className="w-full p-[4px] text-[10px] border none"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              className="w-full p-[4px] text-[10px] border none"
              placeholder="Last Name"
              required
            />
          </div>
          {err.firstName && (
            <p className="text-red-500 text-xs">{err.firstName}</p>
          )}
          {err.lastName && (
            <p className="text-red-500 text-xs">{err.lastName}</p>
          )}

          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            className="w-full p-[4px] text-[10px] border rounded"
            placeholder="Phone"
            required
          />
          {err.phone && <p className="text-red-500 text-xs">{err.phone}</p>}

          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full p-[4px] text-[10px] border rounded"
            placeholder="Email"
            required
          />
          {err.email && <p className="text-red-500 text-xs">{err.email}</p>}

          <div className="flex gap-2 text-[10px] text-white">
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-1"
                name="gender"
                value="Male"
                onChange={handleChange}
                checked={data.Male}
                required
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                className="mr-1"
                name="gender"
                value="Female"
                checked={data.Female}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
          {err.gender && <p className="text-red-500 text-xs">{err.gender}</p>}

          <select
            name="state"
            className="w-full p-[4px] text-[10px] border rounded"
            onChange={handleChange}
            value={data.state}
            required
          >
            <option value="">Select State</option>
            <option value="delhi">Delhi</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="karnataka">Karnataka</option>
            <option value="tamilnadu">Tamil Nadu</option>
            <option value="kerala">Kerala</option>
          </select>
          {err.state && <p className="text-red-500 text-xs">{err.state}</p>}

          <textarea
            name="address"
            value={data.address}
            onChange={handleChange}
            className="w-full p-[4px] text-[10px] border rounded"
            placeholder="Address"
            maxLength="100"
          ></textarea>
          {err.address && <p className="text-red-500 text-xs">{err.address}</p>}

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            className="w-full p-[4px] text-[10px] border rounded"
            placeholder="Password"
            required
          />
          {err.password && (
            <p className="text-red-500 text-xs">{err.password}</p>
          )}

          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
            className="w-full p-[4px] text-[10px] border rounded"
            placeholder="Confirm Password"
            required
          />
          {err.confirmPassword && (
            <p className="text-red-500 text-xs">{err.confirmPassword}</p>
          )}

          <label className="flex items-center text-[10px] text-white">
            <input
              type="checkbox"
              name="checkbox"
              checked={data.checkbox}
              onChange={handleChange}
              className="mr-1"
              required
            />
            I accept terms and conditions
          </label>
          {err.checkbox && (
            <p className="text-red-500 text-xs">{err.checkbox}</p>
          )}

          <button
            type="submit"
            className="w-full p-[4px] text-[10px] bg-indigo-600 text-white rounded hover:bg-indigo-700  bg bg-gradient-to-tr from-indigo-6=400 to-indigo-900"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
