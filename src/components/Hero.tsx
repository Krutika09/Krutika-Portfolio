import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import profileImage from '../assets/krutika-profile.jpg'; // ✅ Import your image

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 pt-20 relative overflow-hidden">
      
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 bg-gray-700">
              <img 
                src={profileImage} 
                alt="Krutika Yawale Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Krutika Yawale
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
            DevOps Engineer
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Passionate about automating infrastructure, optimizing workflows, and building scalable cloud solutions with expertise in AWS, Kubernetes, and CI/CD pipelines.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="/Krutika-Resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105 shadow-lg"
            >
              <Download size={20} />
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
