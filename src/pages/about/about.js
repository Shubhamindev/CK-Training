import React from "react";
import { Mail, Linkedin, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl w-full border border-gray-300">
        
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-center text-blue-600 flex items-center justify-center gap-2">
          <Rocket className="text-yellow-500" /> Eagle Wise
        </h1>
        <p className="text-center text-gray-600 text-lg mt-2">
          Empowering Businesses with AI-Driven SaaS Ad Solutions 🚀
        </p>

        {/* About Company */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-2 text-justify">
            Eagle Wise is a cutting-edge SaaS company dedicated to revolutionizing digital advertising. 
            With AI-driven insights and automation, we help businesses maximize their ad efficiency, 
            targeting the right audience at the right time.
          </p>
        </div>

        {/* Team Members */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Our Leadership</h2>
          <div className="mt-4">
            <p className="text-lg font-medium text-gray-800">👨‍💼 Shubham Kumar</p>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-medium text-gray-800">🎓 Rohit Pant</p>
            <p className="text-gray-600">Mentor & Strategic Advisor</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Our mission is to simplify ad campaigns with AI-driven automation, enabling businesses to 
            focus on growth while we handle optimization.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            We envision a world where advertising is smarter, more effective, and accessible to businesses of all sizes.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2 flex items-center gap-2">
            <Mail className="text-blue-500" size={20} /> shubhamrajput8954samrat@gmail.com
          </p>
          <p className="text-gray-600 flex items-center gap-2 mt-2">
            <Linkedin className="text-blue-500" size={20} /> 
            <a href="https://www.linkedin.com/in/shubham-kumar-2bb56622a/" className="hover:underline">
              Connect with us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
