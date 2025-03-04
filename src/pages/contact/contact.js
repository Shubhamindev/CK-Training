import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        alert("Message Sent Successfully! 🚀");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email Sending Failed:", error);
        alert("Failed to send message. Please try again!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl w-full border border-gray-300">
        
        <h1 className="text-3xl font-bold text-center text-blue-600">Contact Us</h1>
        <p className="text-center text-gray-600 text-lg mt-2">
          Have questions? We're here to help! 🚀
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              placeholder="Enter your name"
              required
            />
          </div>
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
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              placeholder="Write your message... and also write your mail because i don't have money so i get your mail"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 py-2 rounded-lg font-medium flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"} <Send size={18} />
          </button>
        </form>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 text-center">Get in Touch</h2>
          <div className="mt-4 space-y-3 text-center">
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <Mail className="text-blue-500" size={18} /> shubhamrajput8954samrat@gmail.com
            </p>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <Phone className="text-blue-500" size={18} /> +91 9084253488
            </p>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <MapPin className="text-blue-500" size={18} /> Greater Noida, UP, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
